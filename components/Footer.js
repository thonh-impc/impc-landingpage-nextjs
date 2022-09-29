import Link from "next/link";
import { useState } from "react";
import styles from "./footer.module.scss";

const companyLocations = [
  {
    key: "binhduong",
    name: "Binh Duong Office",
    detail:
      "F6, Partview Tower, No. 5A Huu Nghi Boulevard, Vsip II, Binh Hoa W., Thuan An Town, Binh Duong",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.7590491075152!2d106.71690150058227!3d10.924181399312445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d762036ffedd%3A0x3771a8ff3909ee89!2sParkview%20Office%20Building!5e0!3m2!1sen!2s!4v1572244221288!5m2!1sen!2s",
  },
  {
    key: "hochiminh",
    name: "Headquarters - Ho Chi Minh City",
    detail: "No.15, D2 Street, Saigon Pearl Complex,Ward 22, Binh Thanh District, Ho Chi Minh City",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.95445589293462!2d106.7183955!3d10.7905215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a9d54b99bb%3A0xd10e519488eed2cf!2sAVIVA%20SAIGON%20PEARL!5e0!3m2!1sen!2s!4v1630056414578!5m2!1sen!2s",
  },
  {
    key: "bacninh",
    name: "Bac Ninh Office",
    detail: "SH03 Catalyst, No. 1, Huu Nghi road, VSIP Bac Ninh, Phu Chan , Tu Son, Bac Ninh",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7445.335295959954!2d105.96474100000002!3d21.083279999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a806ad0bad3d%3A0x7edf83bb25d6aebb!2zMSDEkMaw4budbmcgSOG7r3UgTmdo4buLLCBQaMO5IENo4bqpbiwgVOG7qyBTxqFuLCBC4bqvYyBOaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1564376314103!5m2!1sen!2sus",
  },
];

const Footer = ({ className }) => {
  const [addressSelected, setAddressSelected] = useState(companyLocations[0]);

  return (
    <footer id="footer" className={`${styles.footer} ${className}`}>
      <nav aria-label="navigation in footer">
        <ul className="naviation-list">
          <li>
            <Link href="/">
              <a className="navigation-text">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a href="/services" className="navigation-text js-link">
                What we do
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a href="/portfolio" className="navigation-text js-link">
                Portfolio
              </a>
            </Link>
          </li>
        </ul>

        <div className="slogan"> IMP DESIGN AND TECHNCIAL MANAGEMENT CORPORATION </div>
      </nav>

      <div className="footer__infomations">
        <section className="footer__contact">
          <div className="section__header">Contact</div>
          <div className="contacts">
            <div className="contact">
              <span className="contact__icon mobile">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.02344 5.48644C5.02344 4.87232 5.25561 4.27317 5.66752 3.82382C6.13185 3.31454 6.79091 3.02246 7.48742 3.02246H10.7902C12.0409 3.02246 13.0969 3.95862 13.2317 5.20185C13.3141 5.9358 13.4639 6.65477 13.6811 7.35877C13.9507 8.23501 13.7185 9.17867 13.0744 9.82275L11.7339 11.1633C13.1343 13.7247 15.2763 15.8666 17.8376 17.2671L19.1782 15.9265C19.8223 15.2824 20.7659 15.0503 21.6422 15.3199C22.3462 15.5371 23.0652 15.6869 23.7991 15.7692C25.0348 15.9041 25.971 16.9526 25.971 18.2033V21.5061C25.971 22.1951 25.6789 22.8541 25.1697 23.326C24.6604 23.7903 23.9714 24.0225 23.2749 23.9625C20.9008 23.7454 18.6165 23.1163 16.4746 22.0977C14.3926 21.1016 12.5052 19.7685 10.8651 18.1359C9.22494 16.4957 7.89184 14.6084 6.90325 12.5264C5.88471 10.3844 5.25561 8.09272 5.03842 5.7261C5.02344 5.63623 5.02344 5.56133 5.02344 5.48644ZM12.1533 8.08523C12.1533 8.00285 12.1383 7.92046 12.1158 7.83808C11.8687 7.03673 11.6964 6.2129 11.6065 5.38159C11.5616 4.96968 11.2096 4.65513 10.7902 4.65513H7.47993C7.24776 4.65513 7.03057 4.75249 6.87329 4.92474C6.71602 5.097 6.64113 5.32917 6.66359 5.56133C7.47993 14.4586 14.5348 21.5135 23.4321 22.3299C23.6718 22.3523 23.8965 22.2775 24.0687 22.1127C24.241 21.9554 24.3383 21.7382 24.3383 21.5061V18.2033C24.3383 17.7839 24.0238 17.4319 23.6119 17.3869C22.7806 17.2971 21.9567 17.1248 21.1629 16.8777C20.8633 16.7878 20.5488 16.8627 20.3316 17.0799L18.1522 19.2593L17.6279 18.9971C14.3401 17.3645 11.6365 14.6533 9.99633 11.3655L9.73421 10.8413L11.9136 8.6619C12.0709 8.50463 12.1533 8.29493 12.1533 8.08523Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="contact__info body-text">+84 28 77703399</span>
            </div>
            <div className="contact">
              <span className="contact__icon mobile">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2069_139)">
                    <path
                      d="M25.873 6.58637C25.8655 6.57161 25.8655 6.56424 25.858 6.54948C25.8506 6.53472 25.8506 6.51997 25.8431 6.50521C25.8431 6.49045 25.8356 6.47569 25.8281 6.46094C25.8207 6.44618 25.8132 6.43142 25.8132 6.41667C25.8057 6.40191 25.7983 6.38715 25.7983 6.3724C25.7908 6.35764 25.7833 6.34288 25.7758 6.32812C25.7684 6.31337 25.7609 6.29861 25.7534 6.29123C25.746 6.27648 25.7385 6.26172 25.731 6.24696C25.7235 6.2322 25.7161 6.21745 25.7086 6.21007C25.7011 6.19531 25.6936 6.18056 25.6862 6.1658C25.6787 6.15104 25.6712 6.14366 25.6638 6.12891C25.6563 6.11415 25.6488 6.09939 25.6413 6.09201C25.6339 6.07726 25.6264 6.06988 25.6189 6.05512C25.6115 6.04036 25.604 6.02561 25.5965 6.01823C25.589 6.00347 25.5816 5.99609 25.5741 5.98134C25.5666 5.96658 25.5592 5.9592 25.5442 5.94444C25.5367 5.92969 25.5293 5.92231 25.5143 5.90755C25.5068 5.8928 25.4919 5.88542 25.4844 5.87066C25.477 5.8559 25.4695 5.84852 25.4545 5.83377C25.4471 5.81901 25.4321 5.81163 25.4247 5.79688C25.4172 5.7895 25.4022 5.77474 25.3948 5.76736C25.3873 5.75998 25.3798 5.74523 25.3724 5.73785C25.3649 5.73047 25.3499 5.71571 25.3425 5.70833C25.335 5.69358 25.32 5.6862 25.3126 5.67144C25.3051 5.66406 25.2902 5.64931 25.2827 5.64193C25.2677 5.63455 25.2603 5.61979 25.2453 5.61241C25.2379 5.60503 25.2229 5.59028 25.2154 5.5829C25.2005 5.57552 25.193 5.56076 25.1781 5.55339C25.1631 5.53863 25.1482 5.53125 25.1407 5.52387C25.1258 5.51649 25.1183 5.50174 25.1034 5.49436C25.0884 5.48698 25.0809 5.4796 25.066 5.47222C25.0511 5.46484 25.0436 5.45009 25.0286 5.44271C25.0137 5.43533 25.0062 5.42795 24.9913 5.42057C24.9763 5.41319 24.9689 5.40582 24.9539 5.39106C24.939 5.38368 24.9315 5.3763 24.9166 5.36892C24.9016 5.36155 24.8867 5.35417 24.8792 5.34679C24.8643 5.33941 24.8568 5.33203 24.8418 5.32465C24.8269 5.31727 24.812 5.3099 24.8045 5.30252C24.7895 5.29514 24.7821 5.28776 24.7671 5.28038C24.7522 5.273 24.7372 5.26562 24.7223 5.25825C24.7073 5.25087 24.6999 5.24349 24.6849 5.23611C24.67 5.22873 24.655 5.22135 24.6401 5.21398C24.6252 5.2066 24.6102 5.19922 24.6027 5.19922C24.5878 5.19184 24.5729 5.18446 24.5579 5.17708C24.543 5.1697 24.528 5.1697 24.5131 5.16233C24.5056 5.15495 24.4907 5.14757 24.4757 5.14757C24.4608 5.14019 24.4458 5.14019 24.4309 5.13281C24.4159 5.12543 24.401 5.11806 24.3861 5.11806C24.3711 5.11068 24.3562 5.11068 24.3412 5.1033C24.3263 5.09592 24.3113 5.09592 24.2964 5.08854C24.2814 5.08116 24.2665 5.08116 24.2516 5.07378C24.2366 5.06641 24.2217 5.06641 24.2067 5.05903C24.1918 5.05903 24.1768 5.05165 24.1619 5.05165C24.1469 5.05165 24.132 5.04427 24.1171 5.04427C24.1021 5.04427 24.0872 5.03689 24.0648 5.03689C24.0498 5.03689 24.0349 5.02951 24.0199 5.02951C24.005 5.02951 23.9826 5.02214 23.9676 5.02214C23.9527 5.02214 23.9377 5.01476 23.9303 5.01476C23.9153 5.01476 23.8929 5.01476 23.878 5.00738C23.863 5.00738 23.8555 5.00738 23.8406 5.00738C23.8182 5.00738 23.7958 5.00738 23.7808 5.00738C23.7733 5.00738 23.7584 5.00738 23.7509 5.00738C23.721 5.00738 23.6912 5.00738 23.6538 5.00738H4.3462C4.31631 5 4.28643 5 4.24907 5C4.24159 5 4.23412 5 4.21918 5.00738C4.19676 5.00738 4.17435 5.00738 4.1594 5.00738C4.14446 5.00738 4.13699 5.00738 4.12204 5.00738C4.1071 5.00738 4.08468 5.00738 4.06974 5.01476C4.05479 5.01476 4.03985 5.02214 4.03238 5.02214C4.01743 5.02214 3.99502 5.02951 3.98007 5.02951C3.96513 5.02951 3.95019 5.03689 3.93524 5.03689C3.9203 5.03689 3.90535 5.04427 3.88294 5.04427C3.86799 5.04427 3.85305 5.05165 3.83811 5.05165C3.82316 5.05165 3.80822 5.05903 3.79328 5.05903C3.77833 5.05903 3.76339 5.06641 3.74844 5.07378C3.7335 5.08116 3.71856 5.08116 3.70361 5.08854C3.68867 5.09592 3.67372 5.09592 3.65878 5.1033C3.64384 5.1033 3.62889 5.11068 3.61395 5.11806C3.599 5.11806 3.58406 5.12543 3.56912 5.13281C3.55417 5.13281 3.53923 5.14019 3.52428 5.14757C3.50934 5.14757 3.50187 5.15495 3.48692 5.16233C3.47198 5.1697 3.45704 5.1697 3.44209 5.17708C3.42715 5.18446 3.4122 5.19184 3.39726 5.19922C3.38979 5.19922 3.37484 5.2066 3.3599 5.21398C3.34496 5.22135 3.33001 5.22873 3.31507 5.23611C3.3076 5.24349 3.29265 5.24349 3.27771 5.25087C3.26276 5.25825 3.24782 5.26562 3.23288 5.273C3.2254 5.28038 3.21046 5.28776 3.19552 5.29514C3.18057 5.30252 3.1731 5.3099 3.15816 5.31727C3.14321 5.32465 3.13574 5.33203 3.1208 5.33941C3.10585 5.34679 3.09091 5.35417 3.08344 5.36892C3.06849 5.3763 3.05355 5.38368 3.04608 5.39106C3.03113 5.39844 3.01619 5.40582 3.00125 5.41319C2.99377 5.42057 2.97883 5.42795 2.97136 5.44271C2.95641 5.45009 2.94147 5.45747 2.934 5.46484C2.91905 5.4796 2.91158 5.48698 2.89664 5.49436C2.88169 5.50174 2.87422 5.51649 2.85928 5.52387C2.85181 5.53125 2.83686 5.53863 2.82939 5.55339C2.81445 5.56076 2.80697 5.56814 2.79203 5.5829C2.78456 5.59028 2.76961 5.59766 2.76214 5.61241C2.7472 5.61979 2.73973 5.63455 2.72478 5.64193C2.71731 5.64931 2.70237 5.66406 2.69489 5.67144C2.68742 5.67882 2.67248 5.69358 2.66501 5.70833C2.65006 5.71571 2.64259 5.72309 2.63512 5.73785C2.62017 5.74523 2.6127 5.75998 2.59776 5.76736C2.59029 5.78212 2.58281 5.7895 2.57534 5.80425C2.5604 5.81163 2.55293 5.82639 2.53798 5.84115C2.53051 5.84852 2.52304 5.86328 2.51557 5.87066C2.50062 5.88542 2.49315 5.8928 2.48568 5.90755C2.47821 5.92231 2.47073 5.92969 2.45579 5.94444C2.44832 5.9592 2.44085 5.96658 2.43337 5.98134C2.4259 5.99609 2.41096 6.00347 2.40349 6.01823C2.39601 6.03299 2.38854 6.04036 2.38107 6.05512C2.3736 6.06988 2.36613 6.08464 2.35866 6.09201C2.35118 6.10677 2.34371 6.12153 2.33624 6.13628C2.32877 6.14366 2.3213 6.15842 2.30635 6.17318C2.29888 6.18793 2.29141 6.20269 2.28394 6.21007C2.28394 6.22483 2.27646 6.23958 2.26899 6.25434C2.26152 6.2691 2.25405 6.28385 2.24658 6.29861C2.2391 6.30599 2.23163 6.32075 2.22416 6.3355C2.21669 6.35026 2.20922 6.36502 2.20922 6.37977C2.20174 6.39453 2.19427 6.40929 2.1868 6.42405C2.17933 6.43142 2.17933 6.44618 2.17186 6.46094C2.16438 6.47569 2.15691 6.49045 2.15691 6.50521C2.14944 6.51997 2.14197 6.53472 2.14197 6.54948C2.1345 6.56424 2.12702 6.57161 2.12702 6.58637C2.04483 6.8151 2 7.05859 2 7.31684V19.6832C2 20.9301 3.00872 21.9557 4.25654 22C4.27148 22 4.28643 22 4.2939 22C4.30884 22 4.32379 22 4.33873 22H23.6687C24.6924 22 25.589 21.3581 25.8954 20.3915C25.9103 20.3546 25.9178 20.3177 25.9253 20.2808C25.9776 20.089 26.0075 19.8898 26.0075 19.6832V7.31684C26 7.05859 25.9552 6.8151 25.873 6.58637ZM3.868 6.71181C3.88294 6.70443 3.89041 6.69705 3.89788 6.68967C3.90535 6.68229 3.91283 6.68229 3.9203 6.67491C3.93524 6.66753 3.94271 6.66016 3.95019 6.65278C3.95766 6.6454 3.96513 6.6454 3.9726 6.63802C3.98755 6.63802 3.99502 6.63064 4.00996 6.62326C4.01743 6.62326 4.02491 6.61589 4.03238 6.61589C4.03985 6.60851 4.05479 6.60851 4.06974 6.60113C4.07721 6.60113 4.08468 6.59375 4.09215 6.59375C4.1071 6.58637 4.11457 6.58637 4.12951 6.57899C4.13699 6.57899 4.14446 6.57161 4.15193 6.57161C4.16687 6.57161 4.17435 6.56424 4.18929 6.56424C4.19676 6.56424 4.20423 6.56424 4.21171 6.55686C4.22665 6.55686 4.24159 6.54948 4.25654 6.54948C4.26401 6.54948 4.27148 6.54948 4.27895 6.54948C4.30137 6.54948 4.32379 6.54948 4.3462 6.54948H23.6538C23.6762 6.54948 23.6986 6.54948 23.721 6.54948C23.7285 6.54948 23.736 6.54948 23.7435 6.54948C23.7584 6.54948 23.7733 6.54948 23.7883 6.55686C23.7958 6.55686 23.8032 6.55686 23.8107 6.56424C23.8257 6.56424 23.8331 6.57161 23.8481 6.57161C23.8555 6.57161 23.863 6.57899 23.8705 6.57899C23.8854 6.57899 23.8929 6.58637 23.9078 6.59375C23.9153 6.59375 23.9228 6.60113 23.9303 6.60113C23.9452 6.60851 23.9527 6.60851 23.9676 6.61589C23.9751 6.61589 23.9826 6.62326 23.99 6.63064C23.9975 6.63802 24.0125 6.63802 24.0199 6.6454C24.0274 6.65278 24.0349 6.65278 24.0423 6.66016C24.0498 6.66753 24.0648 6.67491 24.0722 6.68229C24.0797 6.68967 24.0872 6.68967 24.0946 6.69705C24.1021 6.70443 24.1171 6.71181 24.1245 6.71918C24.132 6.72656 24.132 6.72656 24.1395 6.73394L14.5529 16.1931C14.4035 16.3407 14.2092 16.4219 14 16.4219C13.7908 16.4219 13.5965 16.3407 13.4471 16.1931L3.85305 6.71918C3.86052 6.71918 3.868 6.71181 3.868 6.71181ZM3.56164 8.62283L8.50809 13.5074L3.56164 18.3919V8.62283ZM23.6538 20.4579H4.36115C4.17435 20.4579 4.00249 20.3915 3.868 20.2808L9.62142 14.5994L12.3412 17.2852C12.7821 17.7205 13.3724 17.964 14 17.964C14.6276 17.964 15.2179 17.7205 15.6588 17.2852L18.3935 14.5846L24.1544 20.2734C24.0199 20.3915 23.8406 20.4579 23.6538 20.4579ZM24.4384 18.3698L19.5068 13.5L24.4384 8.63021V18.3698Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clippath id="clip0_2069_139">
                      <rect width="24" height="17" fill="white" transform="translate(2 5)" />
                    </clippath>
                  </defs>
                </svg>
              </span>
              <span className="contact__info body-text">contact@impc.vn</span>
            </div>
          </div>
        </section>

        {companyLocations && (
          <section className="footer__address" data-address-value="binhduong">
            <select
              name="address"
              // defaultValue={companyLocations[0].key}
              value={addressSelected.key}
              id="addressSelect"
              title="Address dropdown"
              onChange={(e) => {
                setAddressSelected(companyLocations.filter((c) => c.key === e.target.value)?.[0]);
              }}
            >
              {companyLocations.map((location) => (
                <option key={location.key} value={location.key}>
                  {location.name}
                </option>
              ))}
            </select>

            <span className="address__detail body-text">{addressSelected.detail}</span>
          </section>
        )}
      </div>

      <div className="map">
        {companyLocations && (
          <iframe
            id="map-iframe"
            title="map"
            src={addressSelected.locationSrc}
            width="100%"
            loading="lazy"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        )}
      </div>

      <div>
        <div className="slogan mobile"> IMP DESIGN AND TECHNCIAL MANAGEMENT CORPORATION </div>
        <div className="footer__bottom-line"></div>
      </div>
    </footer>
  );
};

export default Footer;
