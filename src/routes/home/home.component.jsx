import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "SNOWBOARDS",
      imageUrl:
        "https://i1.adis.ws/i/ride/ride_2223_feature-banner-sm_thrash-collection-lp?w=408&sm=aspect&aspect=408:302&scaleFit=poi&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}&qlt=75&fmt=webp&fmt.interlaced=true&dpi=96",
    },
    {
      id: 2,
      title: "BINDINGS",
      imageUrl:
        "https://i1.adis.ws/i/ride/ride_2223_mm-banner_bindings_composite-series?w=342&sm=aspect&aspect=342:229&scaleFit=poi&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}&qlt=75&fmt=webp&fmt.interlaced=true&dpi=96",
    },
    {
      id: 3,
      title: "BOOTS",
      imageUrl:
        "https://i1.adis.ws/i/ride/ride_2223_mm-banner_boots_lasso-pro?w=342&sm=aspect&aspect=342:229&scaleFit=poi&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}&qlt=75&fmt=webp&fmt.interlaced=true&dpi=96",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
