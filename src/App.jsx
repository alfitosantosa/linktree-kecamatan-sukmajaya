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
                src="https://hendihermawan.files.wordpress.com/2010/07/logodepok.png"
                alt="Ikhwaan"
                width={100}
              />
            </div>
            <h2 className="text-center font-bold text-">KECAMATAN SUKMAJAYA</h2>
            <Button href="https://sukmajaya.depok.go.id/home" className="">
              PORTAL RESMI KOTA DEPOK
            </Button>
            <Button>WHATSUP DISDUKCAPIL</Button>
            <Button href="https://wa.link/24q18y">WHATSUP PENGADUAN</Button>
            <Button href="https://ombudsman.go.id/pengaduan">
              PENGADUAN ONLINE OMBUDSMAN RI
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
