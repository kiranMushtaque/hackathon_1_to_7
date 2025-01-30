








import { createClient } from "@sanity/client";
import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);

    // Log to ensure the buffer is correctly created
    console.log(`Image buffer created for ${imageUrl}`);

    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id; // Return the image reference to be used in the object
  } catch (error) {
    console.error("Failed to upload image:", imageUrl, error);
    return null;
  }
}

async function uploadChefDataToSanity(chef) {
  try {
    console.log(`Uploading chef data: ${chef.name}`);

    let imageRef = null;
    if (chef.image) {
      imageRef = await uploadImageToSanity(chef.image);
    }

    const sanityChef = {
      _type: "chef", 
      name: chef.name,
      position: chef.position || "",
      experience: chef.experience || 0,
      specialty: chef.specialty || "",
      description: chef.description || "",
      available: chef.available !== undefined ? chef.available : true,
      image: imageRef
        ? {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageRef,
            },
          }
        : undefined,
    };

    console.log("Uploading chef to Sanity:", sanityChef);
    const chefResult = await client.create(sanityChef);
    console.log(`Chef uploaded successfully: ${chefResult._id}`);
  } catch (error) {
    console.error("Error uploading chef data:", error);
  }
}

async function importData() {
  try {
    console.log("Fetching food data from API...");

    // Fetch food data from your updated API endpoint
    const foodResponse = await axios.get(
      "https://sanity-nextjs-rouge.vercel.app/api/foods"
    );
    const foods = foodResponse.data;

    // Log the food data to check its structure
    console.log("Fetched food data:", foods);

    console.log(`Fetched ${foods.length} food items`);

    // Process each food item
    for (const food of foods) {
      console.log(`Processing food: ${food.name || food.title || "No name"}`); // Debug output for name field

      let imageRef = null;
      if (food.image) {
        imageRef = await uploadImageToSanity(food.image);
      }

      console.log("Image reference for food:", imageRef); // Log image reference for debugging

      const sanityFood = {
        _type: "food", // Ensure your Sanity schema uses 'food' type
        name: food.name || food.title, // Adjust field if needed
        category: food.category || null,
        price: food.price,
        originalPrice: food.originalPrice || null,
        tags: food.category ? [food.category] : [],
        description: food.description || "",
        available: food.available !== undefined ? food.available : true,
        image: imageRef
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageRef,
              },
            }
          : undefined, // Ensure the image field is correctly set
      };

      console.log("Uploading food to Sanity:", sanityFood);
      const foodResult = await client.create(sanityFood);
      console.log(`Food uploaded successfully: ${foodResult._id}`);
    }

    console.log("Data import completed successfully!");

    // Chef data to be uploaded (replace this with the API if needed)
    const chefData = [
      {
        name: "Tahmina Rumi",
        position: "Head Chef",
        experience: 12,
        specialty: "Italian Cuisine",
        image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-1.png",
        description:
          "Expert in crafting authentic Italian dishes and pastries.",
        available: true,
      },
      {
        name: "Jorina Begum",
        position: "Sous Chef",
        experience: 8,
        specialty: "Pastry and Desserts",
        image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-2.png",
        description:
          "Specializes in creative pastries and dessert innovations.",
        available: true,
      },
      {
        name: "M. Mohammad",
        position: "Grill Master",
        experience: 10,
        specialty: "Grilled Dishes",
        image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-3.png",
        description:
          "Renowned for creating perfectly grilled meats and vegetables.",
        available: true,
      },
      {
        name: "Munna Kathy",
        position: "Culinary Instructor",
        experience: 15,
        specialty: "Asian Fusion",
        image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-4.png",
        description:
          "Pioneer in Asian fusion dishes blending traditional flavors with modern techniques.",
        available: true,
      },
      {
        name: "Bisnu Devgon",
        position: "Executive Chef",
        experience: 20,
        specialty: "Global Cuisine",
        image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-5.png",
        description: "Expert in international cuisines and menu planning.",
        available: true,
      },
      {
        name: "William Rumi",
        position: "Chef de Cuisine",
        experience: 18,
        specialty: "Seafood Specialties",
        image: "https://sanity-nextjs-rouge.vercel.app/chef/chef-6.png",
        description:
          "Master of crafting exquisite seafood dishes with unique flavors.",
        available: true,
      },
    ];

    // Upload chefs data to Sanity
    for (const chef of chefData) {
      await uploadChefDataToSanity(chef);
    }
  } catch (error) {
    console.error("Error importing data:", error);
  }
}

importData();
