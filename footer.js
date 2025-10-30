const fullName = "Lucas Massau";
const yearNow = new Date().getFullYear();
const twitter = "@lucas_massau";
const facebook = "@lucas_massau";
const instagram = "@lucas_massau";
const linkedIn = "linkedin.com/in/lucas-massau";
const sexo = "Masculino";
const localPol = "Barra funda";

const footerHtml = `
  <div style="text-align:center;margin-top:40px;border-top:1px solid #ccc;padding-top:10px;">
    <p>${fullName}</p>
    <p>Ano - ${yearNow}</p>
    <p>twitter: ${twitter}</p>
    <p>facebook: ${facebook}</p>
    <p>Instagram: ${instagram}</p>
    <p>LinkedIn: ${linkedIn}</p>
    <p>Sexo: ${sexo}</p>
    <p>Localização - pol: ${localPol}</p>
  </div>
`;
const el = document.getElementById('site-footer');
if (el) el.innerHTML = footerHtml;