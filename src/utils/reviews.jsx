const customerReviews = [
  {
    id: 1,
    name: "Aisha Abdullahi",
    review:
      "Very fast delivery and friendly staff. I ordered in the morning and got my gas before noon. Will definitely use them again!",
    rating: 5,
    gender: "Female",
  },
  {
    id: 2,
    name: "Musa Lawal",
    review:
      "I love how easy it is to order. Payment on delivery makes things super convenient. Keep up the good work!",
    rating: 5,
    gender: "Male",
  },
  {
    id: 3,
    name: "Chinyere Okonkwo",
    review:
      "Great service overall. My cylinder was exchanged without any issues, and the price was reasonable.",
    rating: 4,
    gender: "Female",
  },
  {
    id: 4,
    name: "Kehinde Adeyemi",
    review:
      "Excellent customer support. I had a question about my order and got a reply on WhatsApp almost immediately.",
    rating: 5,
    gender: "Male",
  },
  {
    id: 5,
    name: "Fatima Yusuf",
    review:
      "This is the most reliable gas delivery service I’ve used so far. The delivery guy was polite and professional.",
    rating: 5,
    gender: "Female",
  },
  {
    id: 6,
    name: "Ngozi Nwachukwu",
    review:
      "Affordable refill prices and quick delivery. I didn’t have a cylinder, and they brought me a new one without stress.",
    rating: 4,
    gender: "Female",
  },
  {
    id: 7,
    name: "Bashir Suleiman",
    review:
      "They always deliver on time, even on weekends. Super impressed with the consistency.",
    rating: 5,
    gender: "Male",
  },
  {
    id: 8,
    name: "Rukayat Mohammed",
    review:
      "Refilled gas was clean and lasted long. I also liked the option to exchange my cylinder easily.",
    rating: 5,
    gender: "Female",
  },
  {
    id: 9,
    name: "Tunde Adebayo",
    review:
      "Simple website and easy ordering process. I just wish they opened a bit earlier in the day.",
    rating: 4,
    gender: "Male",
  },
  {
    id: 10,
    name: "Funke Alabi",
    review:
      "I’ve recommended this service to my neighbors. No more carrying cylinders around – they deliver right to your door!",
    rating: 5,
    gender: "Female",
  },
  {
    id: 11,
    name: "Zainab Bakare",
    review:
      "Smooth ordering process and the gas burns clean. This is my third time ordering — highly recommend!",
    rating: 5,
    gender: "Female",
  },
  {
    id: 12,
    name: "Emmanuel Johnson",
    review:
      "Delivery came earlier than expected. Great service and very professional team.",
    rating: 5,
    gender: "Male",
  },
  {
    id: 13,
    name: "Halima Isah",
    review:
      "I forgot to select 'exchange' and they still helped me sort it out quickly. Great customer care!",
    rating: 4,
    gender: "Female",
  },
  {
    id: 14,
    name: "Richard Eze",
    review:
      "Good prices and quick delivery. My only issue was that the delivery guy had a bit of trouble finding my address.",
    rating: 4,
    gender: "Male",
  },
  {
    id: 15,
    name: "Maryam Sanni",
    review:
      "Very happy with the service. They brought a new cylinder and explained everything to me.",
    rating: 5,
    gender: "Female",
  },
  {
    id: 16,
    name: "John Adebanjo",
    review:
      "Reliable every time. I don’t even bother calling anyone else for gas anymore.",
    rating: 5,
    gender: "Male",
  },
  {
    id: 17,
    name: "Ifeoma Anya",
    review:
      "Quick service and easy payment. I love that I can pay on delivery.",
    rating: 5,
    gender: "Female",
  },
  {
    id: 18,
    name: "Ahmed Musa",
    review: "Gas was delivered in less than 45 minutes. That’s amazing!",
    rating: 5,
    gender: "Male",
  },
  {
    id: 19,
    name: "Gloria Okafor",
    review:
      "Customer service is polite and helpful. They followed up after my order too.",
    rating: 5,
    gender: "Female",
  },
  {
    id: 20,
    name: "Ismail Bello",
    review:
      "First time ordering and it went smoothly. I’ll be using them again for sure.",
    rating: 4,
    gender: "Male",
  },
  {
    id: 21,
    name: "Joy Uche",
    review:
      "Loved how I didn’t need to step out. Everything was handled at my door.",
    rating: 5,
    gender: "Female",
  },
  {
    id: 22,
    name: "Segun Ogunleye",
    review:
      "Efficient and reliable. Also happy that the gas lasted longer than what I previously used.",
    rating: 5,
    gender: "Male",
  },
  {
    id: 23,
    name: "Rita Nwosu",
    review:
      "I was skeptical at first, but I’m glad I tried them. Fast and trustworthy.",
    rating: 4,
    gender: "Female",
  },
  {
    id: 24,
    name: "Tijani Salihu",
    review: "Nice experience overall. Good price, clean gas, polite staff.",
    rating: 5,
    gender: "Male",
  },
  {
    id: 25,
    name: "Victoria Akpan",
    review: "Super easy to order and pay. I’m sticking with them from now on.",
    rating: 5,
    gender: "Female",
  },
  {
    id: 26,
    name: "Kelechi Udo",
    review:
      "Top-notch service. My cylinder was leaking and they helped me replace it on the spot. Impressive!",
    rating: 5,
    gender: "Male",
  },
  {
    id: 27,
    name: "Aminat Olawale",
    review:
      "Their WhatsApp response is fast and helpful. I didn’t have to wait long for my order.",
    rating: 4,
    gender: "Female",
  },
  {
    id: 28,
    name: "Femi Ojo",
    review:
      "Very convenient and affordable. I just place my order online and they handle the rest.",
    rating: 5,
    gender: "Male",
  },
  {
    id: 29,
    name: "Blessing Danjuma",
    review:
      "Loved the professionalism. They even carried the cylinder to my kitchen for me.",
    rating: 5,
    gender: "Female",
  },
  {
    id: 30,
    name: "Nurudeen Abdullahi",
    review:
      "This is how gas delivery should be done. I’m very satisfied with the whole experience.",
    rating: 5,
    gender: "Male",
  },
  {
    id: 31,
    name: "Adaeze Mba",
    review:
      "My gas finished at night and they still managed to deliver early the next morning. Lifesaver!",
    rating: 5,
    gender: "Female",
  },
  {
    id: 32,
    name: "Saheed Adisa",
    review:
      "Fast, polite, and reliable. I’ve already recommended them to my neighbours.",
    rating: 5,
    gender: "Male",
  },
];

export default customerReviews;

// StarRating.js
import React from "react";

export const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<span key={i}>{i <= rating ? "★" : "☆"}</span>);
  }

  return <div style={{ color: "gold", fontSize: "1.2rem" }}>{stars}</div>;
};
