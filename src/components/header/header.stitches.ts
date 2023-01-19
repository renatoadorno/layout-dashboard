import { styled } from '../../../stitches.config';

export const Container = styled('nav', {
  width: '100%',
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$gray10',
  color: '$whiteA12',
  paddingLeft: 28,
  paddingRight: 28,
  position:'fixed',
  zIndex: 999,

  '@md': {
    zIndex: 99,
    justifyContent: 'flex-start',
  },
});

export const Title = styled('h1', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginLeft: 10,

  '& svg':{
    marginLeft: 7,
  }
});

export const BtnMenu = styled('div', {
  display: 'none',

  '& svg':{
  },

  '@md': {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    cursor: 'pointer',
  },
});

export const Sidebar = styled('nav', {
  display: 'none',

  variants: {
    variant: {
      open: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '$gray10',
        width: '35%',
        height: '100vh',
        position: 'absolute',
        top: 48,
        left: '0%',
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
      },

      closed: {
        display: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'closed'
  },
});

export const List = styled('ul', {
  marginLeft: 32,
  marginTop: 22,

  '& li': {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,

    '& svg': {
      size: 20,
      marginRight: 10,
    },
  },
});

export const Avatar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray11',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '$whiteA12',
  borderRadius: 200,
  padding: 5,
  size: 34,
});

export const Contente = styled('div', {
  width: '100%',
  display: 'flex',
  height: 48,
  alignItems: 'center',
  justifyContent: 'flex-end',
});