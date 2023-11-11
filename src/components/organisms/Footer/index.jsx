import logo from "../../../../public/assets/img/logo-saye.png";
import "./style.css";
import alfamart from "../../../../public/assets/transaksi-img/logo-alfamart.png";
import bca from "../../../../public/assets/transaksi-img/logo-bca.png";
import bni from "../../../../public/assets/transaksi-img/logo-bni.png";
import bri from "../../../../public/assets/transaksi-img/logo-bri.png";
import dana from "../../../../public/assets/transaksi-img/logo-dana.png";
import indomaret from "../../../../public/assets/transaksi-img/logo-indomaret.png";
import jcb from "../../../../public/assets/transaksi-img/logo-jcb.png";
import linkaja from "../../../../public/assets/transaksi-img/logo-linkaja.png";
import mandiri from "../../../../public/assets/transaksi-img/logo-mandiri.png";
import ovo from "../../../../public/assets/transaksi-img/logo-ovo.png";
import permata from "../../../../public/assets/transaksi-img/logo-permata.png";
import qris from "../../../../public/assets/transaksi-img/logo-qris.png";
import shopeepay from "../../../../public/assets/transaksi-img/logo-shopeepay.png";
import mastercard from "../../../../public/assets/transaksi-img/mastercard.png";
import visa from "../../../../public/assets/transaksi-img/visa.png";

export default function Footer() {
  return (
    // <!-- Footer -->
    <footer className="footer-wrapper">
      <div className="footer-logo">
        <img src={logo} alt="logo brooo" />
        <p>
          Selamat datang di website resmi Saye Printer, printer nyaman yang akan
          merevolusi cara bekerja Anda!
        </p>
      </div>
      <div className="footer-account">
        <h3>My Account</h3>
        <a href="">Login</a>
        <a href="">Register</a>
      </div>
      <div className="footer-information">
        <h3>Store Information</h3>
        <p>
          Jl. Kalicari IV A/45 Semarang, Desa/Kelurahan Kalicari, Kec. Kalicari,
          Kota Semarang, Jawa Tengah
        </p>
        <p>Chat Us: 0856-400-90173</p>
        <p>Email Us: sayeprint@gmail.com</p>
      </div>

      <div className="credit">
        <p>&copy; 2023 Saye Print</p>
      </div>
      <div className="credit-location">
        <h3>CV SAYE PRINT ENTREPRENEUR</h3>
        <p>
          Jl. Kalicari IV A/45 Semarang, Desa/Kelurahan Kalicari, Kec. Kalicari,
          Kota Semarang, Jawa Tengah
        </p>
      </div>
      <div className="credit-transaksi">
        <img
          src={visa}
          alt="visa broo"
        />
        <img
        src={mastercard}
          alt="card"
        />
        <img
          src={jcb}
          alt="jcb broo"
        />
        <img
        src={bca}
          alt="bca broo"
        />

        <img
          src={bni}
          alt="bni broo"
        />

        <img
          src={mandiri}
          alt="mandiri broo"
        />

        <img
          src={bri}
          alt="bri broo"
        />

        <img
          src={permata}
          alt="permata broo"
        />

        <img
          src={ovo}
          alt="ovo broo"
        />

        <img
          src={dana}
          alt="dana broo"
        />

        <img
          src={shopeepay}
          alt="shopeepay broo"
        />

        <img
          src={linkaja}
          alt="link aja"
        />

        <img
          src={qris}
          alt="qris aja"
        />

        <img
          src={alfamart}
          alt="alfamart broo"
        />

        <img
          src={indomaret}
          alt="indomaret broo"
        />
      </div>
    </footer>
    // <!-- Footer End-->
  );
}
