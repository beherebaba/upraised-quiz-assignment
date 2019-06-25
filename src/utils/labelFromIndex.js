const labelFromIndex = (index, { upperCase=true }={}) => {
    if (index > 25) {
        throw new Exception('Index value cannot exceed 25');
    }
    return String.fromCharCode((upperCase ? 65 : 97) + index);
};

export default labelFromIndex;