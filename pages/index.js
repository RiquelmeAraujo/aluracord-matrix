import appConfig from '../config.json';
import {Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useState } from 'react';
import { useRouter } from 'next/router'




function Title(props){
    const Tag = props.tag || 'h1';
    return(
        <>
            <Tag>
             {props.children}
            </Tag>
            <style jsx>{`
            ${Tag}{
                color: ${appConfig.theme.colors.neutrals["000"]};
                font-size: 24px;
                font-weight: bold;
            }
            `}
            </style>
        </>
    );
}

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Title tag="h1">Boas vindas de volta</Title>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
//   }
export default function PaginaInicial() {
  
    //const username = 'peas';
    const [username, setUserName] = useState('');
    const roteamento = useRouter();

    // const urlApi = `https://api.github.com/users/${username}`
    // fetch(urlApi)
    //   .then((response => {
    //     response.json()
    //   .then( (data) =>{
    //     console.log(data)
    //   }).catch((err) => {
    //     console.log("nao achou", err)
    //   })
    //   }))

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            // backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://images.pexels.com/photos/3172571/pexels-photo-3172571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgba(0, 0, 0,  0.5)',
              backdropFilter: 'blur( 4px )',
              // backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function(infosDoEvento){

                infosDoEvento.preventDefault();
                roteamento.push(`/chat?username=${username}`)
                
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals['000'] }}>
                {appConfig.name}
              </Text>
            
              <TextField
                fullWidth
                value={username}
                onChange={function Handler(event){
                  const valor = event.target.value 
                  setUserName(valor);
                }}
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals['000'],
                    mainColor: appConfig.theme.colors.primary['500'],
                    mainColorHighlight: appConfig.theme.colors.neutrals['500'],
                    backgroundColor: 'transparent',
                    boxShadow: '0 2px 10px 0 rgba(0, 0, 0,  0.5)',  
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.neutrals[500],
                  mainColorLight: appConfig.theme.colors.primary[500],
                  mainColorStrong: appConfig.theme.colors.primary[500],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals['500'],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
                boxShadow: '0 2px 10px 0 rgba(0, 0, 0,  0.5)',
              }}
            >
              
            {/* {mensagem.texto.startsWith(':sticker:')
             ? (
               <Image src={mensagem.texto.replace(':sticker:', '')}/>
            )
            : (
              mensagem.texto
            )} */}

            {username.length > 2 
            ?(
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                
                }}

                
                src={`https://github.com/${username}.png`}
                />
            ) : (
              <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              
              }}

              
              src={`https://images.pexels.com/photos/5941331/pexels-photo-5941331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`}
              />
            )
          }
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  // backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px',
                  boxShadow: '0 2px 10px 0 rgba(0, 0, 0,  0.5)',
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }
  
