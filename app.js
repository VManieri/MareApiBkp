const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const PORT = 4000;

mongoose.connect('mongodb+srv://viniciusmnr:hsksMH8NW6ddEpp9@cluster0.569kchc.mongodb.net/database?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Dados = mongoose.model('testes', {
  idunidade: String,
  idequipamento: String,
  ordem_prod: String,
  data_prod: String,
  nome_estrutura: String,
  quantidade_produ: String,
  lote_produ: String,
  grupo_00: {
    materia_prima_01: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_02: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_03: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_04: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_05: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_06: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_07: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_08: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_09: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_10: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_11: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_12: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
  },
  grupo_01: {
    materia_prima_01: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_02: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_03: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_04: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_05: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_06: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_07: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_08: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_09: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_10: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_11: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_12: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
  grupo_02: {
    materia_prima_01: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_02: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_03: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_04: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_05: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_06: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_07: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_08: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_09: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_10: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_11: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
    materia_prima_12: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
    },
  grupo_03: {
    materia_prima_01: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_02: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_03: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_04: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_05: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_06: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_07: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_08: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_09: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_10: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_11: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      },
    materia_prima_12: {
      materia_nome: String,
      materia_quantidade: String,
      materia_tempo: String,
      }, 
  },
}}});

app.use(express.json());

app.get("/dados", async (request, response) => {
  const dados = await Dados.find()
  return response.json (api)
})

app.get('/api', (req, res) => {
  res.send('Rota /api acessada com sucesso!');
});

app.post('/', async (req, res) => {
  const dados = new Dados({
    idunidade: req.body.idunidade || "",
    ordem_prod: req.body.ordem_prod || "",
    data_prod: req.body.data_prod || "",
    nome_estrutura: req.body.nome_estrutura || "",
    quantidade_produ: req.body.quantidade_produ || "",
    lote_produ: req.body.lote_produ || "",
    grupo_00: {
      materia_prima_01: {
        materia_nome: req.body.grupo_00?.materia_prima_01?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_01?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_01?.materia_tempo || "",
      },
      materia_prima_02: {
        materia_nome: req.body.grupo_00?.materia_prima_02?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_02?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_02?.materia_tempo || "",
      },
      materia_prima_03: {
        materia_nome: req.body.grupo_00?.materia_prima_03?.materia_nome || "", 
        materia_quantidade: req.body.grupo_00?.materia_prima_03?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_03?.materia_tempo || "",
      },
      materia_prima_04: {
        materia_nome: req.body.grupo_00?.materia_prima_04?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_04?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_04?.materia_tempo || "",
      },
      materia_prima_05: {
        materia_nome: req.body.grupo_00.materia_prima_05.materia_nome || "",
        materia_quantidade: req.body.grupo_00.materia_prima_05.materia_quantidade || "",
        materia_tempo: req.body.grupo_00.materia_prima_05.materia_tempo || "",
      },
      materia_prima_06: {
        materia_nome: req.body.grupo_00?.materia_prima_06?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_06?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_06?.materia_tempo || "",
      },
      materia_prima_07: {
        materia_nome: req.body.grupo_00?.materia_prima_07?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_07?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_07?.materia_tempo || "",
      },
      materia_prima_08: {
        materia_nome: req.body.grupo_00?.materia_prima_08?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_08?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_08?.materia_tempo || "",
      },
      materia_prima_09: {
        materia_nome: req.body.grupo_00?.materia_prima_09?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_09?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_09?.materia_tempo || "",
      },
      materia_prima_10: {
        materia_nome: req.body.grupo_00?.materia_prima_10?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_10?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_10?.materia_tempo || "",
      },
      materia_prima_11: {
        materia_nome: req.body.grupo_00?.materia_prima_11?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_11?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_11?.materia_tempo || "",
      },
      materia_prima_12: {
        materia_nome: req.body.grupo_00?.materia_prima_12?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_12?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_12?.materia_tempo || "",
      },
    },
    grupo_01: {
      materia_prima_01: {
        materia_nome: req.body.grupo_00?.materia_prima_01?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_01?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_01?.materia_tempo || "",
      },
      materia_prima_02: {
        materia_nome: req.body.grupo_00?.materia_prima_02?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_02?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_02?.materia_tempo || "",
      },
      materia_prima_03: {
        materia_nome: req.body.grupo_00?.materia_prima_03?.materia_nome || "", 
        materia_quantidade: req.body.grupo_00?.materia_prima_03?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_03?.materia_tempo || "",
      },
      materia_prima_04: {
        materia_nome: req.body.grupo_00?.materia_prima_04?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_04?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_04?.materia_tempo || "",
      },
      materia_prima_05: {
        materia_nome: req.body.grupo_00.materia_prima_05.materia_nome || "",
        materia_quantidade: req.body.grupo_00.materia_prima_05.materia_quantidade || "",
        materia_tempo: req.body.grupo_00.materia_prima_05.materia_tempo || "",
      },
      materia_prima_06: {
        materia_nome: req.body.grupo_00?.materia_prima_06?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_06?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_06?.materia_tempo || "",
      },
      materia_prima_07: {
        materia_nome: req.body.grupo_00?.materia_prima_07?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_07?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_07?.materia_tempo || "",
      },
      materia_prima_08: {
        materia_nome: req.body.grupo_00?.materia_prima_08?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_08?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_08?.materia_tempo || "",
      },
      materia_prima_09: {
        materia_nome: req.body.grupo_00?.materia_prima_09?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_09?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_09?.materia_tempo || "",
      },
      materia_prima_10: {
        materia_nome: req.body.grupo_00?.materia_prima_10?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_10?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_10?.materia_tempo || "",
      },
      materia_prima_11: {
        materia_nome: req.body.grupo_00?.materia_prima_11?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_11?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_11?.materia_tempo || "",
      },
      materia_prima_12: {
        materia_nome: req.body.grupo_00?.materia_prima_12?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_12?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_12?.materia_tempo || "",
      },
    },
    grupo_02: {
      materia_prima_01: {
        materia_nome: req.body.grupo_00?.materia_prima_01?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_01?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_01?.materia_tempo || "",
      },
      materia_prima_02: {
        materia_nome: req.body.grupo_00?.materia_prima_02?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_02?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_02?.materia_tempo || "",
      },
      materia_prima_03: {
        materia_nome: req.body.grupo_00?.materia_prima_03?.materia_nome || "", 
        materia_quantidade: req.body.grupo_00?.materia_prima_03?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_03?.materia_tempo || "",
      },
      materia_prima_04: {
        materia_nome: req.body.grupo_00?.materia_prima_04?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_04?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_04?.materia_tempo || "",
      },
      materia_prima_05: {
        materia_nome: req.body.grupo_00.materia_prima_05.materia_nome || "",
        materia_quantidade: req.body.grupo_00.materia_prima_05.materia_quantidade || "",
        materia_tempo: req.body.grupo_00.materia_prima_05.materia_tempo || "",
      },
      materia_prima_06: {
        materia_nome: req.body.grupo_00?.materia_prima_06?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_06?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_06?.materia_tempo || "",
      },
      materia_prima_07: {
        materia_nome: req.body.grupo_00?.materia_prima_07?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_07?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_07?.materia_tempo || "",
      },
      materia_prima_08: {
        materia_nome: req.body.grupo_00?.materia_prima_08?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_08?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_08?.materia_tempo || "",
      },
      materia_prima_09: {
        materia_nome: req.body.grupo_00?.materia_prima_09?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_09?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_09?.materia_tempo || "",
      },
      materia_prima_10: {
        materia_nome: req.body.grupo_00?.materia_prima_10?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_10?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_10?.materia_tempo || "",
      },
      materia_prima_11: {
        materia_nome: req.body.grupo_00?.materia_prima_11?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_11?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_11?.materia_tempo || "",
      },
      materia_prima_12: {
        materia_nome: req.body.grupo_00?.materia_prima_12?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_12?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_12?.materia_tempo || "",
      },
    },
    grupo_03: {
      materia_prima_01: {
        materia_nome: req.body.grupo_00?.materia_prima_01?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_01?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_01?.materia_tempo || "",
      },
      materia_prima_02: {
        materia_nome: req.body.grupo_00?.materia_prima_02?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_02?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_02?.materia_tempo || "",
      },
      materia_prima_03: {
        materia_nome: req.body.grupo_00?.materia_prima_03?.materia_nome || "", 
        materia_quantidade: req.body.grupo_00?.materia_prima_03?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_03?.materia_tempo || "",
      },
      materia_prima_04: {
        materia_nome: req.body.grupo_00?.materia_prima_04?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_04?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_04?.materia_tempo || "",
      },
      materia_prima_05: {
        materia_nome: req.body.grupo_00.materia_prima_05.materia_nome || "",
        materia_quantidade: req.body.grupo_00.materia_prima_05.materia_quantidade || "",
        materia_tempo: req.body.grupo_00.materia_prima_05.materia_tempo || "",
      },
      materia_prima_06: {
        materia_nome: req.body.grupo_00?.materia_prima_06?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_06?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_06?.materia_tempo || "",
      },
      materia_prima_07: {
        materia_nome: req.body.grupo_00?.materia_prima_07?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_07?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_07?.materia_tempo || "",
      },
      materia_prima_08: {
        materia_nome: req.body.grupo_00?.materia_prima_08?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_08?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_08?.materia_tempo || "",
      },
      materia_prima_09: {
        materia_nome: req.body.grupo_00?.materia_prima_09?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_09?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_09?.materia_tempo || "",
      },
      materia_prima_10: {
        materia_nome: req.body.grupo_00?.materia_prima_10?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_10?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_10?.materia_tempo || "",
      },
      materia_prima_11: {
        materia_nome: req.body.grupo_00?.materia_prima_11?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_11?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_11?.materia_tempo || "",
      },
      materia_prima_12: {
        materia_nome: req.body.grupo_00?.materia_prima_12?.materia_nome || "",
        materia_quantidade: req.body.grupo_00?.materia_prima_12?.materia_quantidade || "",
        materia_tempo: req.body.grupo_00?.materia_prima_12?.materia_tempo || "",
      },
    },
   
  });


  await dados.save();
  res.send(dados);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
