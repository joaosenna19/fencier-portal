// import AddSale from 'src/Components/AddSale/AddSale';
import Heading from 'src/UI/Heading/Heading';
import AddSale from 'src/Components/AddSale/AddSale';

const NewSale = () => {
  return (
    <section>
      <Heading title='Add a new lead'/>
      <div>
        <AddSale />
      </div>
    </section>
  );
};

export default NewSale;