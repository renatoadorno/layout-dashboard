import { styled } from '../stitches.config';

export const Container = styled('div', {
  height: '100vh',
});

export const ContentSection = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.5fr 6fr',
  height: '100vh',
  paddingTop: 48,

  variants:{
    variant: {
      max: {
        gridTemplateColumns: '1.5fr 6fr',

        '& button': {
          display: 'flex',
          alignItems: 'center',
          width: '20%',
          height: '7.5vh',
          backgroundColor: '$gray11',
          position: 'fixed',
          bottom: 0,
          paddingLeft: 13,

          '& svg': {
            size: 20,
            marginLeft: 20,
            marginRight: 10,
          },
        },

        '& nav': {
          gridColumn: 1,
          height: '85vh',
          backgroundColor: '$gray8',
          position: 'sticky',
          left: 0,
          overflow: 'auto',

          '&::-webkit-scrollbar':{
            backgroundColor: '$gray8',
            width: 5,
            borderRadius: 10,
          },
  
          '&::-webkit-scrollbar-thumb':{
            borderRadius: 10,
          },
  
          '&:hover': {
            '&::-webkit-scrollbar-thumb':{
              backgroundColor: '$gray11',
            },
          },

          '& ul':{
            marginLeft: 32,
            marginTop: 22,
          },

          '& li': {
            display: 'flex',
            alignItems: 'center',
            marginTop: 8,

            '& svg': {
              size: 20,
              marginRight: 10,
            },
          },
        },

        '& section': {
          gridColumn: 2,
          backgroundColor: '$gray6',
          overflow: 'auto',
          padding: 20,

          '&::-webkit-scrollbar':{
            backgroundColor: '$gray8',
            width: 7,
            borderRadius: 10,
          },
  
          '&::-webkit-scrollbar-thumb':{
            borderRadius: 10,
          },
  
          '&:hover': {
            '&::-webkit-scrollbar-thumb':{
              backgroundColor: '$gray11',
            },
          },
        }
      },
      min: {
        gridTemplateColumns: '0.5fr 9fr',

        '& button': {
          display: 'flex',
          alignItems: 'center',
          width: '5.3%',
          height: '7.5vh',
          backgroundColor: '$gray11',
          position: 'fixed',
          bottom: 0,
  
          '& svg': {
            size: 20,
            marginLeft: 20,
            marginRight: 10,
          },

          '& p': {
            display: 'none',
          },
        },

        '& nav': {
          gridColumn: 1,
          display: 'flex',
          height: '85vh',
          backgroundColor: '$gray8',
          position: 'sticky',
          left: 0,
          overflow: 'auto',

          '&::-webkit-scrollbar':{
            backgroundColor: '$gray8',
            width: 5,
            borderRadius: 10,
          },
  
          '&::-webkit-scrollbar-thumb':{
            borderRadius: 10,
          },
  
          '&:hover': {
            '&::-webkit-scrollbar-thumb':{
              backgroundColor: '$gray11',
            },
          },

          '& ul':{
            marginLeft: 24,
            marginTop: 5,
          },

          '& li': {
            display: 'flex',
            alignItems: 'center',
            marginTop: 10,

            '& svg': {
              size: 20,
            },

            '& p': {
              display: 'none',
            },
          },
        },

        '& section': {
          gridColumn: 2,
          backgroundColor: '$gray6',
          overflow: 'auto',
          padding: 20,

          '&::-webkit-scrollbar':{
            backgroundColor: '$gray8',
            width: 5,
            borderRadius: 10,
          },
  
          '&::-webkit-scrollbar-thumb':{
            borderRadius: 10,
          },
  
          '&:hover': {
            '&::-webkit-scrollbar-thumb':{
              backgroundColor: '$gray11',
            },
          },
        }
      },
    },
  },

  defaultVariants: {
    variant: 'max'
  },

  '@md': {
    display: 'flex',

    '& nav': {
      display: 'none',
    },

    '& button': {
      display: 'none !important',
    }
  },
});
