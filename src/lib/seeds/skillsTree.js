const skills = [
  {
    id: 1,
    name: 'Front End Developer',
    user_ids: {
      user_id: 1,
      user_id: 2,
    },
    child_skills: {
      {
        id: 3,
        name: 'JavaScript',
        user_ids: {
          user_id: 1,
        },
        child_skills: {
        }
      },
    },
  },
  {
    id: 2,
    name: 'Back End Developer',
    user_ids: {
      user_id: 3,
      user_id: 4,
    },
    child_skills: {

    },
  },

]

export default markers;
