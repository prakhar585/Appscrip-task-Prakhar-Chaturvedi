import Image from "next/image";
import styles from "./Header.module.css";

import Logo from "../../../public/assets/images/Logo.png";
import Search from "../../../public/assets/images/search-normal.png";
import Heart from "../../../public/assets/images/Heart.png";
import Shopping from "../../../public/assets/images/shopping-bag.png";
import Profile from "../../../public/assets/images/Profile.png";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.left}>
        <Image src={Logo} alt="Logo" width={32} height={32} />
      </div>

      {/* Center Section */}
      <div className={styles.center}>
        <div className={styles.name}>LOGO</div>
      </div>

      {/* Right Section */}
      <div className={`${styles.right} ${styles.iconGroup}`}>
        <span className={styles.icon}>
          <Image src={Search} alt="Search" width={24} height={24} />
        </span>
        <span className={styles.icon}>
          <Image src={Heart} alt="Heart" width={24} height={24} />
        </span>
        <span className={styles.icon}>
          <Image src={Shopping} alt="Shopping" width={24} height={24} />
        </span>
        <span className={styles.icon}>
          <Image src={Profile} alt="Profile" width={24} height={24} />
        </span>
        <span>
          <select className={styles.langSelect}>
            <option>EN</option>
            <option>FR</option>
            <option>ES</option>
            <option>HIN</option>
          </select>
        </span>
      </div>
    </header>
  );
};

export default Header;
