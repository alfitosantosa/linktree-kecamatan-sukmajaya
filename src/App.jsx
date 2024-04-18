import "./App.css";
import { Button, Card } from "flowbite-react";

function App() {
  return (
    <>
      <div className="mx-auto my-auto p-4">
        <div>
          <Card>
            {" "}
            <div className="mx-auto">
              <img
                src="https://pbb-bphtb.depok.go.id:58083/e_pbb/assets/img/landing_hero_01.png"
                alt="Ikhwaan"
                width={400}
              />
            </div>
            <h2 className="text-center font-bold text-">KECAMATAN SUKMAJAYA</h2>
            <Button href="https://sukmajaya.depok.go.id/home" className="">
              PORTAL RESMI KOTA DEPOK
            </Button>
            <Button href="https://silondobermula.depok.go.id/layanan/">
              LAYANAN DISDUKCAPIL
            </Button>
            <Button href="https://wa.link/24q18y">WHATSUP PENGADUAN</Button>
            <Button href="https://ombudsman.go.id/pengaduan">
              PENGADUAN ONLINE OMBUDSMAN RI
            </Button>
            <Button href="https://drive.google.com/drive/folders/1-82_akdTe03nnhRpv4e2qniivDgtR8ru">
              PEMBUATAN AHLI WARIS
            </Button>
            <Button href="https://bkol.depok.go.id/register/4">
              PEMBUATAN KARTU KUNING
            </Button>
            <Button
              href="
https://drive.google.com/drive/folders/1-DBoY28fKEAu95GbywL_JCjO9Efg2Fwf"
            >
              REKOMENDASI IMB
            </Button>
            <Button
              href="
https://docs.google.com/forms/d/e/1FAIpQLSe4wopu3y_Lx1sZgXFalCQznVpaKLeuL5XOojteK37b2yt8dg/viewform?usp=sf_link"
            >
              DISPENSASI NIKAH
            </Button>
            <Button href="https://drive.google.com/drive/folders/1-F0jZBVGYPA-5uOMpOJWkwSmzZLYdCH_">
              PPATS
            </Button>
            <Button href="https://forms.gle/19nzQamdrJoU8xnV9">
              SURVEY KEPUASAN MASYARAKAT
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
