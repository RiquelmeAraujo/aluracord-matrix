import { Box, Text, TextField, Image, Button, Icon} from "@skynexui/components";
import React, { useEffect, useState } from "react";
import appConfig from "../config.json";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from 'next/router';


import { ButtonSendSticker } from '../src/components/ButtonSendSticker.js'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyMDc5MiwiZXhwIjoxOTU4ODk2NzkyfQ.mJJ2D3hJXfE0TVH2tg08uASD2vwc30gT7kBipZdgFmo'
const SUPABASE_URL = 'https://lsyookcvlvewvangsllw.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function escutaMensagensEmTempoReal(adicionaMensagem) {
  return supabaseClient
    .from('mensagens')
    .on('INSERT', (respostaLive) => {
      adicionaMensagem(respostaLive.new);
    })
    .subscribe();
}

export default function ChatPage() {
  // Sua lógica vai aqui
  const roteamento = useRouter();
  const usuarioLogado = roteamento.query.username;

  const [mensagem, setMessage] = useState('')
  const [listaDeMensagem, setListaDeMensagem] = useState([]);



  useEffect(() => {
    supabaseClient
      .from('mensagens')
      .select('*')
      .order('id', {ascending: false})
      .then(({data}) => {
        setListaDeMensagem(data)
      });

    const subscription = escutaMensagensEmTempoReal((novaMensagem) => {
      setListaDeMensagem((valorAtualDaLista) => {
        return [
          novaMensagem, 
          ...valorAtualDaLista,
     ]
      });
    });
    return () => {
      subscription.unsubscribe();
    }
  }, []);
 
  function handleNovaMensagem (novaMensagem) {
    
    const mensagem = {
      de: usuarioLogado,
      texto: novaMensagem,
    };

    supabaseClient
    .from('mensagens')
    .insert([
      mensagem
    ])
    .then(({data}) => {
    });


    setMessage("");
  };

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://images.pexels.com/photos/3172571/pexels-photo-3172571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          //backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",

          boxShadow: '0 2px 10px 0 rgba(0, 0, 0,  0.5)',
          backdropFilter: 'blur( 4px )',
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagem} /> 

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "justify-content",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMessage(valor);
            }}
               onKeyPress={(event) => {
                 if (event.key === 'Enter') {
                   event.preventDefault();
                   handleNovaMensagem(mensagem);
                }
              }}

              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                minHeight: '50px',
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals['800'],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals['200'],
              }}
            />
            <Button 
              iconName="FaTelegram"
              onClick={(event)=>{
                event.preventDefault();
                handleNovaMensagem(mensagem);
              }}
              styleSheet={{
                borderRadius: '50%',
                padding: '0 3px 0 0',
                minWidth: '50px',
                minHeight: '50px',
                fontSize: '20px',
                marginBottom: '8px',
                marginRight: '5px',
                fontSize: '50px',
                color: appConfig.theme.colors.neutrals["300"],
                marginBottom: '10px',
                backgroundColor: appConfig.theme.colors.primary["000"],
                hover:{
                  color: appConfig.theme.colors.primary["500"],
                  backgroundColor: appConfig.theme.colors.primary["000"],
                },
                focus:{
                  color: appConfig.theme.colors.primary["500"],
                  backgroundColor: appConfig.theme.colors.primary["000"],
                }
                
              }}
            />            
            <ButtonSendSticker 
              onStickerClick={(sticker) => {
                 handleNovaMensagem(':sticker: '+ sticker)
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5" >Chat</Text>
        <Button
          styleSheet={{color: 'white'}}
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals["700"],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div> 
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/${mensagem.de}.png`}
              />
              <Text tag="strong">
                  {mensagem.de}
                </Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
              </div>
              <Button 
              iconName="FaWindowClose"
              variant="tertiary"
              styleSheet={{
                fontSize: '20px',
                color: appConfig.theme.colors.neutrals['red'],
                hover:{
                  color: appConfig.theme.colors.neutrals['red'],
                  backgroundColor: appConfig.theme.colors.neutrals[300],
                },
                focus:{
                  color: appConfig.theme.colors.primary["red"],
                  backgroundColor: appConfig.theme.colors.primary["000"],
                },
              }}
            >
            </Button>
            </Box>
            {/* {mensagem.texto.startWith(':sticker:').toString()} */}
            {mensagem.texto.startsWith(':sticker:')
             ? (
               <Image src={mensagem.texto.replace(':sticker:', '')}/>
            )
            : (
              mensagem.texto
            )}
            
          </Text>
        );
      })}
    </Box>
  )
}
