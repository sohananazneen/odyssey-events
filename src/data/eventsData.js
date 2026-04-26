const eventsData = [
  {
    id: 1,
    title: "Corporate Leadership Summit",
    image_url:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
    short_description:
      "A premier gathering of industry executives focusing on 2026's economic landscape.",
    full_description:
      "The Corporate Leadership Summit brings together CEOs, managers, and entrepreneurs from across Bangladesh to discuss digital transformation and sustainable growth strategies. Featuring keynote speakers from global tech giants and networking gala dinners.",
    specifications: {
      duration: "8 Hours",
      venue_capacity: "200",
      includes: ["Lunch", "Digital Materials", "Networking Access"],
      dress_code: "Business Professional",
    },
    additional_info: {
      price: 150,
      date: "2026-06-15",
      category: "Corporate",
      location: "Dhaka",
      organizer: "Elite Events Ltd",
    },
    related_items: [3, 4],
  },
  {
    id: 2,
    title: "Wedding Ceremony of A & S",
    image_url:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    short_description:
      "An elegant and traditional celebration of love in the heart of Chattogram.",
    full_description:
      "Experience the grandeur of a traditional Bangladeshi wedding. From the floral decorations to the gourmet multi-course feast, every detail is crafted by Dream Planners to ensure a memorable night for the couple and guests.",
    specifications: {
      duration: "6 Hours",
      parking: "Valet Available",
      cuisine: "Traditional Bengali & Mughal",
      guest_limit: "300",
    },
    additional_info: {
      price: 0,
      date: "2026-07-02",
      category: "Wedding",
      location: "Chattogram",
      organizer: "Dream Planners",
    },
    related_items: [5],
  },
  {
    id: 3,
    title: "Tech Expo 2026",
    image_url:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    short_description:
      "Exploring the next frontier of AI and Robotics in South Asia.",
    full_description:
      "The largest tech exhibition in Bangladesh, showcasing cutting-edge hardware, software solutions, and AI-driven robotics. Meet the innovators shaping our future in this three-day immersive event.",
    specifications: {
      wifi: "Complimentary High-Speed",
      exhibitors: "50+",
      keynote_sessions: "12",
      entry_type: "Digital Pass",
    },
    additional_info: {
      price: 25,
      date: "2026-08-10",
      category: "Exhibition",
      location: "Dhaka",
      organizer: "Innovate BD",
    },
    related_items: [1, 4],
  },

  {
    id: 4,
    title: "Startup Pitch Day",
    image_url:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    short_description:
      "Connecting promising startups with venture capitalists and angel investors.",
    full_description:
      "Watch the next big thing happen live. 20 selected startups will pitch their business models to a panel of international investors. Includes a networking brunch and one-on-one mentor sessions.",
    specifications: {
      format: "Hybrid (In-person & Virtual)",
      prizes: "$10k Grant",
      pitch_time: "5 Mins per Startup",
      investors: "15 Panels",
    },
    additional_info: {
      price: 75,
      date: "2026-05-20",
      category: "Business",
      location: "Dhaka",
      organizer: "Startup Hub BD",
    },
    related_items: [1, 3],
  },

  {
    id: 5,
    title: "Art & Craft Exhibition",
    image_url:
      "https://images.unsplash.com/photo-1771364891727-d24ea1973f18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJ0JTIwJTI2JTIwQ3JhZnQlMjBFeGhpYml0aW9uJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    short_description:
      "Celebrating the creativity of local artisans and contemporary painters.",

    full_description:
      "Explore a curated collection of paintings, sculptures, and handmade crafts. This exhibition aims to provide a platform for emerging artists to sell their work directly to collectors.",

    specifications: {
      artwork_count: "200+",

      workshops: "Pottery & Canvas",

      sale_commission: "0% for Artists",

      vibe: "Quiet/Inspirational",
    },

    additional_info: {
      price: 15,

      date: "2026-06-25",

      category: "Exhibition",

      location: "Barisal",

      organizer: "Creative Minds",
    },
    related_items: [8],
  },
  {
    id: 6,
    title: "Charity Gala Night",
    image_url:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    short_description:
      "A fundraising evening dedicated to supporting rural education programs.",
    full_description:
      "Join the Hope Foundation for an evening of silent auctions and live performances. All proceeds from the ticket sales and auctions will go directly towards building schools in remote areas.",
    specifications: {
      donations: "Tax-Deductible",
      auction_items: "25 Unique Pieces",
      entertainment: "Live Orchestra",
      dinner: "Full Formal Service",
    },
    additional_info: {
      price: 100,
      date: "2026-11-18",
      category: "Charity",
      location: "Rajshahi",
      organizer: "Hope Foundation",
    },
    related_items: [1, 8],
  },
  {
    id: 7,
    title: "Food Festival",
    image_url:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    short_description:
      "Taste the flavors of the world at the beautiful Cox's Bazar beach.",
    full_description:
      "Over 100 stalls featuring international cuisines, local street food delights, and live cooking demonstrations by celebrity chefs. The perfect weekend for foodies by the sea.",
    specifications: {
      stalls: "100+",
      entry: "Free (Pay-per-dish)",
      highlights: "Seafood Special",
      family_friendly: "Yes, Kids Zone included",
    },
    additional_info: {
      price: 0,
      date: "2026-12-05",
      category: "Festival",
      location: "Cox's Bazar",
      organizer: "Taste BD",
    },
    related_items: [4, 9],
  },

  {
    id: 8,
    title: "Sports Tournament",
    image_url:
      "https://plus.unsplash.com/premium_photo-1685048594731-e01b08fcc07b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxzcG9ydHMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
    short_description:
      "Inter-district championship featuring Cricket, Football, and Badminton.",
    full_description:
      "The Active Youth sports meet brings together the best amateur athletes for a week of competitive sports. Promoting health, teamwork, and district pride.",
    specifications: {
      sports: ["Cricket", "Football", "Badminton"],
      teams: "24",
      trophy: "Champions Cup 2026",
      medical: "First Aid Crew On-site",
    },
    additional_info: {
      price: 10,
      date: "2026-07-30",
      category: "Sports",
      location: "Rangpur",
      organizer: "Active Youth",
    },
    related_items: [4],
  },
  {
    id: 9,
    title: "New Year Celebration",
    image_url:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    short_description:
      "Count down to 2027 with fireworks, food, and high-energy music.",
    full_description:
      "The grandest New Year's Eve event in Dhaka. Featuring a midnight fireworks show, a gala dinner, and performances by top-tier musical acts to welcome the new year in style.",
    specifications: {
      fireworks: "15 Min Show",
      dinner_type: "Grand Buffet",
      beverages: "Included",
      vibe: "Celebratory/Festive",
    },
    additional_info: {
      price: 120,
      date: "2026-12-31",
      category: "Festival",
      location: "Dhaka",
      organizer: "City Events",
    },
    related_items: [4, 7],
  },
];

export default eventsData;
