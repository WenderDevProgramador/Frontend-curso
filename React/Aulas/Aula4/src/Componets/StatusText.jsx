export default () => {
    const status =  true
    return (
    <h2
    style={{
        color: status ? '#00ff9f' : '#f64848'
    }} >Current status: {status ? 'ON' : 'OFF'}</h2>)
}