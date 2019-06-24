import styled from '@emotion/native';

export const style = {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: '#fff',
    elevation: 3,
};

const Tile = styled.View(style);

export default Tile;