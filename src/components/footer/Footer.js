import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer d__flex align__items__center justify__content__center pz-10 flex__direction__column">
      <ul class="icon">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100011710546224"
            target="_blank"
          >
            <i class="ti ti-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Vng41977408" target="_blank">
            <i class="ti ti-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/vuminhdang12/" target="_blank">
            <i class="ti ti-instagram"></i>
          </a>
        </li>
        <li>
          <a href="linkedin.com/in/vũ-đăng-3a778b1a5" target="_blank">
            <i class="ti ti-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCb3MqHh4OtHzZrXZ4YP8Z7A/about"
            target="_blank"
          >
            <i class="ti ti-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/minhdang1202" target="_blank">
            <i class="ti ti-github"></i>
          </a>
        </li>
      </ul>

      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        © 2022 by Minh Đăng.
      </span>
    </div>
  );
};

export default Footer;
