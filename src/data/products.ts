import toys from "@/assets/toys.jpg";
import keychains from "@/assets/keychains.jpg";
import football from "@/assets/football.jpg";
import mosquito from "@/assets/mosquito.jpg";
import massager from "@/assets/massager.jpg";
import fan from "@/assets/fan.jpg";
import projector from "@/assets/projector.jpg";
import cars from "@/assets/cars.jpg";
import vacuum from "@/assets/vacuum.jpg";
import massagegun from "@/assets/massagegun.jpg";
import stool from "@/assets/stool.jpg";
import candymachine from "@/assets/candymachine_new.png";
import campingstove from "@/assets/campingstove_new.png";
import switchboard from "@/assets/switchboard_new.png";
import talkingbird from "@/assets/talkingbird.jpg";
import rccars from "@/assets/rccars.jpg";
import miniprinter from "@/assets/miniprinter.jpg";
import bikeclean from "@/assets/bikeclean.jpg";
import kidscamera from "@/assets/kidscamera.jpg";
import watergun from "@/assets/watergun_new.png";
import pedicure from "@/assets/pedicure_new.png";
import rcsuv from "@/assets/rcsuv_new.png";
import grinder from "@/assets/grinder_new.png";
import pianomat from "@/assets/pianomat_new.png";
import studytablet from "@/assets/studytablet_new.png";
import mirrorsticker from "@/assets/mirror_sticker.png";
import minimop from "@/assets/mini_mop.png";
import vloggingkit from "@/assets/vlogging_kit.png";
import knifesharpener from "@/assets/knife_sharpener.png";
import aloelotion from "@/assets/aloe_lotion.png";
import vitclotion from "@/assets/vit_c_lotion.png";
import facewash from "@/assets/face_wash.png";
import bodymist from "@/assets/body_mist.png";
import icecream from "@/assets/icecream.jpg";
import kulfi from "@/assets/kulfi.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  tagline: string;
  image: string;
};

export const products: Product[] = [
  // Toys
  { id: "kids-toys", name: "Kids Toys Collection", category: "Toys", price: "₹149", tagline: "Bright, safe & endlessly fun.", image: toys },
  { id: "talking-bird", name: "Talking Parrot Toy", category: "Toys", price: "₹499", tagline: "Repeats every word with a giggle.", image: talkingbird },
  { id: "rc-cars", name: "RC Transformer Car", category: "Toys", price: "₹699", tagline: "Speedy RC racers for little drivers.", image: rccars },
  { id: "rc-suv", name: "RC SUV Truck", category: "Toys", price: "₹799", tagline: "Rugged remote-control SUV with full steering.", image: rcsuv },
  { id: "mini-printer", name: "Mini Printer for Kids", category: "Toys", price: "₹1299", tagline: "Instant prints for stories & sketches.", image: miniprinter },
  { id: "water-gun", name: "Super Water Gun", category: "Toys", price: "₹199", tagline: "Summer splash wars, kids edition!", image: watergun },
  { id: "zeto-camera", name: "Zeto Kids Camera", category: "Toys", price: "₹899", tagline: "Capture adventures like a little pro.", image: kidscamera },
  { id: "candy-machine", name: "Cotton Candy Machine", category: "Toys", price: "₹599", tagline: "Make fluffy sugary magic at home.", image: candymachine },
  { id: "piano-mat", name: "Music Style Piano Mat", category: "Toys", price: "₹849", tagline: "Step, play & learn music the fun way.", image: pianomat },
  { id: "study-tablet", name: "Kids Study Tablet", category: "Toys", price: "₹649", tagline: "Learn letters, numbers & music playfully.", image: studytablet },
  // Accessories
  { id: "keychains", name: "Designer Keychains", category: "Accessories", price: "₹99", tagline: "Cute companions for every key.", image: keychains },
  // Sports
  { id: "football-series", name: "Football Sport Series", category: "Sports", price: "₹199", tagline: "Mini jerseys & footballs for fans.", image: football },
  // Gadgets
  { id: "mosquito-bat", name: "Rechargeable Mosquito Bat", category: "Gadgets", price: "₹349", tagline: "Powerful zap, bug-free nights.", image: mosquito },
  { id: "rechargeable-fan", name: "Rechargeable Mini Fan", category: "Gadgets", price: "₹449", tagline: "Cool breeze, anywhere you go.", image: fan },
  { id: "voice-projector", name: "USB Voice & Star Projector", category: "Gadgets", price: "₹699", tagline: "Magical nights for kids & rooms.", image: projector },
  { id: "smart-vacuum", name: "Smart Vacuum Cleaner", category: "Gadgets", price: "₹3999", tagline: "Hands-free cleaning, every day.", image: vacuum },
  { id: "switchboard-signs", name: "Glow Switch Board Signs", category: "Gadgets", price: "₹149", tagline: "Find every switch in the dark.", image: switchboard },
  // Wellness
  { id: "massager", name: "Handheld Body Massager", category: "Wellness", price: "₹599", tagline: "Relax, recharge, repeat.", image: massager },
  { id: "massage-gun", name: "Professional Massage Gun", category: "Wellness", price: "₹2499", tagline: "Deep-tissue relief on demand.", image: massagegun },
  { id: "portable-stool", name: "Portable Folding Stool", category: "Wellness", price: "₹399", tagline: "Sit anywhere, fold & go.", image: stool },
  { id: "pedicure-tool", name: "Flawless Pedi Electric Tool", category: "Wellness", price: "₹260", tagline: "Smooth feet in minutes, salon at home.", image: pedicure },
  // Beauty & Care
  { id: "aloe-lotion", name: "Aloe Vera Body Lotion", category: "Beauty & Care", price: "₹249", tagline: "Hydrate & nourish with pure aloe extracts.", image: aloelotion },
  { id: "vit-c-lotion", name: "Vitamin C Body Lotion", category: "Beauty & Care", price: "₹299", tagline: "Brighten your skin with natural radiance.", image: vitclotion },
  { id: "face-wash", name: "Waterless Face Wash", category: "Beauty & Care", price: "₹199", tagline: "Anti-radiation, clean skin anywhere.", image: facewash },
  { id: "body-mist", name: "Legacy Shimmer Body Mist", category: "Beauty & Care", price: "₹399", tagline: "Finest fragrance with a touch of sparkle.", image: bodymist },
  // Kitchen
  { id: "multigrinder", name: "Multifunctional Grinder 300W", category: "Kitchen", price: "₹465", tagline: "Grind spices, coffee & more in seconds.", image: grinder },
  { id: "mini-mop", name: "Portable Mini Squeeze Mop", category: "Kitchen", price: "₹299", tagline: "Quick & easy cleaning for small spaces.", image: minimop },
  { id: "knife-sharpener", name: "Professional Knife Sharpener", category: "Kitchen", price: "₹349", tagline: "Keep your blades razor-sharp.", image: knifesharpener },
  { id: "ice-cream-mold", name: "Silicone Ice Cream Mold", category: "Kitchen", price: "₹199", tagline: "Make fun popsicles at home.", image: icecream },
  { id: "kulfi-maker", name: "Kulfi Maker Set", category: "Kitchen", price: "₹149", tagline: "Traditional treats made easy.", image: kulfi },
  // Home & Gadgets
  { id: "mirror-sticker", name: "Oval Mirror Sticker", category: "Gadgets", price: "₹199", tagline: "Self-adhesive, flexible & crystal clear.", image: mirrorsticker },
  { id: "vlogging-kit", name: "Professional Vlogging Kit", category: "Gadgets", price: "₹1499", tagline: "Everything you need to start your channel.", image: vloggingkit },
  { id: "portable-iron", name: "Portable Dry Iron with Spray", category: "Gadgets", price: "₹899", tagline: "Wrinkle-free clothes on the go.", image: vloggingkit },
  // Outdoor & Auto
  { id: "bike-clean", name: "Bike Cleaning Set", category: "Outdoor", price: "₹799", tagline: "Electric motor wash gun for bikes & cars.", image: bikeclean },
  { id: "camping-stove", name: "Portable Camping Stove", category: "Outdoor", price: "₹549", tagline: "Cook anywhere, anytime outdoors.", image: campingstove },
  { id: "car-accessories", name: "Car Accessories", category: "Auto", price: "₹199", tagline: "Style and utility on the move.", image: cars },
];
