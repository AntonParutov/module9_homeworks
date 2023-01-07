const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

function createXmlObj() {
  const parser = new DOMParser();
  const xmlDOM = parser.parseFromString(xmlString, "text/xml");

  const listNode = xmlDOM.querySelector("list");
  const studentNode = listNode.querySelectorAll("student");
  let result = { list: [] };

  studentNode.forEach((element) => {
    let stud = new Object();
    let nameNode = element.querySelector("name");
    let firstNode = element.querySelector("first");
    let secondNode = element.querySelector("second");
    let ageNode = element.querySelector("age");
    let profNode = element.querySelector("prof");

    let langAttr = nameNode.getAttribute("lang");

    stud.name = firstNode.textContent + " " + secondNode.textContent;
    stud.age = Number(ageNode.textContent);
    stud.prof = profNode.textContent;
    stud.lang = langAttr;
    result.list.push(stud);
  });
  console.log(result);
}
createXmlObj(xmlString);
