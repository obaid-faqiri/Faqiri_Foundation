export const navLinks = [
  { id: 1, title: "Home", path: "/" },

 {
  id: 2,
  title: "About Us",
  path: "/about",   // 👈 ADD THIS
  dropdown: [
    { title: "About Us", path: "/about" },
    { title: "Our Mission", path: "/mission" },
    { title: "Leadership", path: "/leadership" },
    { title: "Why Choose Us", path: "/why" },
    { title: "FAQ", path: "/faq" }
  ]
},

  { id: 3, title: "Causes", path: "/causes" },
  { id: 4, title: "Events", path: "/events" },
  { id: 5, title: "Projects", path: "/projects" },

  {
    id: 6,
    title: "All Pages",
    megaMenu: [
      [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "Our Mission", path: "/mission" },
      ],
      [
        { title: "Projects", path: "/projects" },
        { title: "Events", path: "/events" },
        { title: "Causes", path: "/causes" },
      ],
      [
        { title: "Blog", path: "/blog" },
        { title: "Event Details", path: "/event-details" },
        { title: "FAQ", path: "/faq" },
      ],
    ],
  },
];
