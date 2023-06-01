const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-yellow-500 text-center  mb-2 text-2xl">--{subHeading}--</p>
      <h2 className="text-black text-4xl border-y-4 py-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
