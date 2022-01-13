import loading from './loading.module.css'

const Loading = () => {
  return (
    <div className={loading.containerLoad}>
      <div className={loading.ldsRing}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <p className={loading.txtLoading}>Cargando...</p>
    </div>
  )
}

export default Loading
