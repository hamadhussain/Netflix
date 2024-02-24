// "use client";
// import Image from "next/image";
// import HomeP from "./Components/Home/page";
// import F from "./Components/Footer/page";
// import "./globals.css"
// export default function Home() {
//     return (
//       <>
//         <div className="page css  min-h-screen flex flex-col ">
//           {/* <HomeP />
//           <F /> */}
//         </div>
//       </>
//     );
// }


"use client";
import Image from "next/image";
import HomeP from "./Components/Home/page";
import F from "./Components/Footer/page";
// import "./globals.css"
export default function Home() {
    return (
      <>
        <div className="page css  min-h-screen flex flex-col ">
          <HomeP />
          <F />
        </div>
       
      </>
    );
}
