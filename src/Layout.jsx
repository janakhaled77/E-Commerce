// import React, { useState, useEffect } from 'react';
// import NavBar1 from './NavBar1';
// import { Outlet } from 'react-router-dom';
// import WishList from './Wishlist';
// import wishListContextProvider from './WishlistContext';

// export default function Layout() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log('Mounting');
//   }, []);

//   return (
//     <div>
//       <NavBar1 />
//       <div className="container mx-auto max-w-screen-xl">

//         <Outlet />

       
//           <wishListContextProvider/>
        
//       </div>

//     </div>
//   );
// }4
import React, { useState, useEffect } from 'react';
import NavBar1 from './NavBar1';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Mounting');
  }, []);

  return (
    <>
      <NavBar1 />
      <div className="container mx-auto max-w-screen-xl">
        <Outlet />
      </div>
      </>
  );
}
