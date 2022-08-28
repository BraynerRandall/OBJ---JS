const notebook = {
    Processador: "i7",
    Memória: "16GB",
    Preço: 5000,
    HD: "1GB",
    SSD: "256GB"
};

for (const key in notebook) {
    const element = notebook[key];
    console.log(`Descrição: ${key} | Valor: ${element}`);
};