//import image
//import Image from""next/image";
//import Logo from"/assets/images/logo.png";
import Link from "next/link";
import Styles from "./header.module.scss";
const Header=() =>{
    return(
        <div className={Styles.container}>
        <div className={Styles.logotipo}>
            {/* <Image src={Logo} alt="Logo" width={50} height={50} /> */}
            <img src="/assets/images/logo.png" alt="Logo" width={50} height={50} />
        </div>

        <div className={Styles.menu}>
            <Link href="/">Home</Link>
            <Link href="/">Sobre</Link>
            <Link href="/">...</Link>
        </div>
        <div className={Styles.search}></div>
        <div className={Styles.action}>
            <button className={Styles.button}>Fale conosco</button>
        </div>
    </div>
    );           
};
export default Header;