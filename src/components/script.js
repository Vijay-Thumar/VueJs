
export default {
    name: 'GallaryCard',
    data() {
      return {
      heading: "Shelby Mustang",
      details: "Think of the 2022 Ford Mustang Shelby GT500 kind of like a rolling theme park. Its monstrous 760-hp supercharged V-8 launches the coupe with eye-watering force, and its immense grip causes sensations of euphoria or nausea or both.",
      count: 0,
      };
    },
    methods: {
      clickHandler() {
        alert("11 Cr");
      },
      add() {
        this.count++;
      },
      sub() {
        this.count--;
      }
    },
  };