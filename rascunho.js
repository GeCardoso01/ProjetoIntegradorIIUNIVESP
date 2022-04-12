function MyForm() {
    const [name, setName] = useState("");
  
    return (
      <form>
        <h1>Utilize o formulário abaixo para cadastrar sua empresa como um ponto de 
          coleta de recicláveis eletrô
        </h1>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
  }
