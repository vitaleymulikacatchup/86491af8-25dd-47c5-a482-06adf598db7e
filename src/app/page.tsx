"use client"

import { Coffee, MessageCircle, Star, Users, MapPin } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="wavyBackground"
      cardStyle="solid-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Location", id: "contact" },
            { name: "Reviews", id: "testimonials" }
          ]}
          brandName="Brew & Bite"
          button={{
            text: "Order Online",
            href: "https://order.brewandbite.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Your Perfect Coffee & Brunch Spot"
          description="Freshly roasted coffee, artisan pastries, and gourmet brunch dishes in a warm, welcoming atmosphere"
          tag="Welcome"
          tagIcon={Coffee}
          buttons={[
            {
              text: "View Menu",
              href: "menu"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/g6c99e8524320ddef9d57451e108c40c722e7a1feb54462ca953939c8572cad497ec3aeda3d6ab682f07050758c9889fc25e8077edd5570543cceee27ea49e845_1280.jpg"
          imageAlt="Cozy coffee shop interior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Brew & Bite, we believe great coffee and delicious food bring people together. Since 2018, we've been crafting the perfect blend of artisan coffee, fresh pastries, and gourmet brunch favorites in the heart of our community."
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Menu Items"
          description="Discover our signature coffee blends and artisan brunch favorites"
          tag="Popular"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Signature Espresso Blend",
              price: "$4.50",
              imageSrc: "https://pixabay.com/get/g0304499d2ca9fd754e54a588e9d4407b37cdf5668426b9bf1e9ade43c433070c4da5a1fa3c1d3093c9fb1c0a00f08c19f9672baf8bffb1ae215d17d31c573ecb_1280.jpg",
              imageAlt: "Artisan coffee with latte art",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Fresh Croissant",
              price: "$3.25",
              imageSrc: "https://pixabay.com/get/g4f6122029e4dfddc60c51880d5c87572ff7604ae139559c3cce01e16c5991ac01e951a9761f8d3645e9455187c70a5f2586d48d303ce759114707b2c87b19f3d_1280.jpg",
              imageAlt: "Fresh buttery croissant",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Gourmet Breakfast Sandwich",
              price: "$8.95",
              imageSrc: "https://pixabay.com/get/ged48aea9d41a738b7d79eb60c90c7e70f1044f4509d5f34c49bf56383bfeb8bb548f243d1ab935c4b159ed244298533d44a83c7d29972a83001cb5f1aad6b8f9_1280.jpg",
              imageAlt: "Gourmet breakfast sandwich",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from coffee lovers and brunch enthusiasts"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Local Regular",
              company: "Downtown Professional",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g72c5efd0520f00a27fa4acef77ae6991db08f59d2556adc70bec09fb7dac67e53ec45ef6cdc1de1138864df1b6baabad575c81cc1c2022fc4e0e03f148f607d8_1280.jpg",
              imageAlt: "Happy customer Sarah Johnson"
            },
            {
              id: "2",
              name: "Emily Chen",
              role: "Coffee Enthusiast",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge0adc232f771b113cbf6c7d6acc3b8c5ffc0f22c341c9fcb5580e2e4177fa35edc8f37e1de87470f9a9564386d1af5591752cbb123243b77d531e85bc96967a6_1280.jpg",
              imageAlt: "Emily Chen enjoying coffee"
            },
            {
              id: "3",
              name: "Michael Torres",
              role: "Business Owner",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb1552a5518b7e52a0b8262ca8fbddaae84e163de6e9404d0c6b72ee24c3e135d95c3a084793e65671368d86fc7ebd2c69de9acf0d40712ef5dbef2f2124f6aff_1280.jpg",
              imageAlt: "Michael Torres at coffee meeting"
            },
            {
              id: "4",
              name: "Lisa Rodriguez",
              role: "Weekend Bruncher",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g592d1b280e5d04ef59684c9d925f5b12ac6889889dd7fdf35134b31097a8a952b72f3ac8a7325e5d5cadb494369beb029d9f1860eeb77c3672a1fdcbc600144c_1280.jpg",
              imageAlt: "Lisa Rodriguez with friends"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Local Community"
          description="Proudly serving our neighborhood and partnering with local businesses"
          tag="Partners"
          tagIcon={Users}
          logos={[
            "https://pixabay.com/get/g5c7a621e8087171cd13a6d7deb0e56889f53229645954ddf1551e15db5e655cb23ac64e1c91ba8c01e3e2b6df9cc8f5fdcea02cc4968a3e3c86d0f45397615e7_1280.jpg",
            "https://pixabay.com/get/g224e6a9631fa07c2b35ff2f718daa91854d19522ac8bae432c57cc0e01fed5605dca5c474b0bc9bdc30502d97919beceffd399e4dfdeb766d1ed8c7274e356a8_1280.jpg",
            "https://pixabay.com/get/gd5b013348df007d691ae45a08ee1d59b78555347c86371c576dee6cda5594ff8828609acbc6752a9dcca6168e63aacba254919297a2c1731b572cd0e68e8fde0_1280.jpg",
            "https://pixabay.com/get/g0ec7316ccf6350547ee9e91e5f6f6600e234f8d787e648716f21dce2ba5fd2ea11a55c799780c282dbaf41fa60012b30800cb8b7abefdfc55a39b6195d4062a0_1280.jpg",
            "https://pixabay.com/get/g7aab0a8c5211e02ca6f7fa17fb3499d15221d07bcb787649f2de2aae24dff79a59b6680f6c1dd53a9d059b29cf80c8c63b15c148091aeba0f8b75570134e65ef_1280.jpg",
            "https://pixabay.com/get/g1b5bb7d742b13956ed5580ea99aa7f024a849540c260aab0fa443b0a3aa78786c85f8a2d9b403ecac5bbbb72f34a627093f6b2e2acf979df144edf08ef30acbf_1280.jpg",
            "https://pixabay.com/get/g3ccd9a3e8a654fb2a8abc41bb11f962d650e3ccd3e5e38ef40a8e2f18d1ab1bf20a898fb87fa47a44dda8662f43d9552efabecde3a5b10ca16e73185aee6ba4c_1280.jpg"
          ]}
          showCard={true}
          speed={35}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Stop by for great coffee and food"
          description="Join our community of coffee lovers. Subscribe to get updates on new menu items, special events, and exclusive offers."
          tagIcon={MapPin}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about our menu and events. Unsubscribe anytime."
          imageSrc="https://pixabay.com/get/gcb0fc4a6118806cff50c06cd753cd6ad3ee67489e10f688528865ad155e2f3ead1fff234eb8158f5ce6bee436bf478fe1d65d78d57b193ab8a0d591c9e491d7f_1280.jpg"
          imageAlt="Brew & Bite coffee shop exterior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew & Bite"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "About Us", href: "about" },
                { label: "Location", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Order Online", href: "https://order.brewandbite.com" },
                { label: "Catering", href: "https://catering.brewandbite.com" },
                { label: "Gift Cards", href: "https://giftcards.brewandbite.com" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "testimonials" },
                { label: "Events", href: "https://events.brewandbite.com" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}