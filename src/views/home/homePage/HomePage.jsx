import AdsCarousel from '../adsCarousel/AdsCarousel';
import RandomBeverages from '../randomBeverages/RandomBeverages';
import Categories from '../categories/Categories';
import Ad from '../ad/Ad';
import Newsletter from '../newsletter/Newsletter';

function Home() {
  // loadSelectedBeverages = async ({ id, newState }) => {
  //   if (newState.beverages[id].isLoading === false) {
  //     newState.beverages[id].isLoading = true;
  //     this.setState(newState);
  //   }
  //   try {
  //     let selectedBeverages = await beverageServices.getSelectedBeverages({
  //       query: newState.beverages[id].query,
  //     });

  //     const { beverages } = newState;

  //     selectedBeverages = orderBy(
  //       selectedBeverages,
  //       [beverages[id].sort.by],
  //       [beverages[id].sort.order]
  //     );
  //     beverages[id].list = selectedBeverages;
  //     beverages[id].isLoading = false;
  //     if (beverages[id].list.length)
  //       toast.success('beverages are loaded successfully.', {
  //         position: toast.POSITION.BOTTOM_RIGHT,
  //       });
  //   } catch (error) {
  //     newState.beverages[id].isLoading = false;
  //     toast.error(error.message, {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //     });
  //   }
  //   this.setState(newState);
  // };

  // sortItems = ({ id, sortBy }) => {
  //   const { sort } = this.state.beverages[id];

  //   const newState = { ...this.state };
  //   const selectedBeverages = newState.beverages[id];

  //   if (sort.by === sortBy) {
  //     selectedBeverages.sort.order = sort.order === 'asc' ? 'desc' : 'asc';
  //   } else {
  //     selectedBeverages.sort.by = sortBy;
  //     selectedBeverages.sort.order = 'asc';
  //   }
  //   selectedBeverages.list = orderBy(
  //     selectedBeverages.list,
  //     [selectedBeverages.sort.by],
  //     [selectedBeverages.sort.order]
  //   );
  //   this.setState(newState);
  // };

  // tabOnChangeHandler = async ({ id, query }) => {
  //   const newState = { ...this.state };
  //   newState.currentTab = id;
  //   this.setState(newState);

  //   if (newState.beverages[id].list.length === 0) {
  //     newState.beverages[id].query = query;
  //     this.loadSelectedBeverages({ id, newState });
  //   }
  // };

  return (
    <div className='home-page'>
      <AdsCarousel />
      <RandomBeverages />
      <Categories />
      <Ad />
      <Newsletter />
    </div>
  );
}

export default Home;
