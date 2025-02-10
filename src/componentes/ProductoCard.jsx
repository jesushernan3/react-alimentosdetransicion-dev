function ProductoCard({ producto }) {
  return (
    <div>
      <div class="card">
        <div class="card-image">
          <img src={producto.img} alt="Placeholder image" />
        </div>
        <div className="card-content">
          <h3 className="text-sm pt-2">{producto.titulo}</h3>
          <div className="text-sm py-3">{producto.descripcion}</div>
        </div>
      </div>
    </div>
  );
}
export default ProductoCard;
