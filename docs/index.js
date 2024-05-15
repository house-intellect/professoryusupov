const doGet = () =>
HtmlService.createTemplateFromFile("views/index") 
.evaluate()
.setSandboxMode(HtmlService.SandboxMode.IFRAME) 
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

const include = (ruta) =>
HtmlService.createHtmlOutputFromFile(ruta).getContent();
