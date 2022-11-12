import { Footer } from "./common/components/footer/footer.components";
import { Header } from "./common/components/header/header.component";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";
import { MenuPage } from "./modules/menu/pages/menu.page";

import mockPizzas from './moks/pizza.json';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="mx-12 mb-24">
      {/* <MenuList items={mockPizzas}/> */}
    <MenuPage/>
      </div>
      <Footer/>
    </div>
  );
}

export { App };
