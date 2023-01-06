import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import React from "react";
import DocuPDF from "./DocuPDF";
import Button from "react-bootstrap/Button";
import VistaWeb from "./VistaWeb";
import Formu from "./Formu";

function App() {
  const [poema, setPoema] = React.useState("");
  const [data, setData] = React.useState({})
  const [verWeb, setVerWeb] = React.useState(false);
  const [verPDF, setVerPDF] = React.useState(false);
  function fetchPoema() {
    fetch("https://poetrydb.org/title/Ozymandias/lines.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].lines[0]);
        setPoema(data[0].lines[0]);
      });
  }

  React.useEffect(() => {
    fetchPoema();
  }, []);

  const Menu = () => (
    <nav
      style={{
        display: "flex",
        borderBottom: "1px solid black",
        paddingBottom: "5px",
        justifyContent: "space-around",
      }}
    >
      <Button
        variant="dark"
        onClick={() => {
          setVerWeb(!verWeb);
          setVerPDF(false);
        }}
      >
        {verWeb ? "Ocultar Web" : "Ver Web"}
      </Button>
      <Button
        variant="dark"
        onClick={() => {
          setVerPDF(!verPDF);
          setVerWeb(false);
        }}
      >
        {verPDF ? "Ocultar PDF" : "Ver PDF"}
      </Button>
      <PDFDownloadLink
        document={<DocuPDF data={data} />}
        fileName="poema.pdf"
      >
        <Button variant="info">Descargar PDF</Button>
      </PDFDownloadLink>
    </nav>
  );

  return (
    <div style={{minHeight: "100vh"}}>
      <Menu />
      {poema ? (
        <>
          {verWeb ? <VistaWeb data={data} /> : null}
          {verPDF ? (
            <PDFViewer style={{width: "100%", height: "90vh"}}>
              <DocuPDF data={data} />
            </PDFViewer>
          ) : null}
        </>
      ) : null}
      {
       ( !verWeb && !verPDF) && (
        <Formu setData={setData} data={data} />
       )}
    </div>
  );
}

export default App;
