const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "./20221018_aint_db.json");

const ExcelToJSON = () => {
  const excel = XLSX.readFile(
    "C:\\Users\\ingenieria\\Desktop\\Azm\\Proyectos_FS\\aint-project-tools\\db\\20221018_aint_db.xlsx"
  );
  var nombreHoja = excel.SheetNames;
  let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

  console.log(datos);

  fs.writeFile(productsFilePath, JSON.stringify(datos, null, " "), (err) => {
    if (err) {
      console.log("Fallo en la creación del JSON");
    } else {
      console.log("Listado JSON creado exitosamente");
    }
  });
};

ExcelToJSON();
