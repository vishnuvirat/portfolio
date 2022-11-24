export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },

    {
      name: "company",
      title: "Company",
      type: "string",
    },

    {
      name: "companyImage",
      title: "CompnayImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "dateStarted",
      title: "DateStarted",
      type: "string",
    },

    {
      name: "dateEnded",
      title: "DateEnded",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "string",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },

    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
