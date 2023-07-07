import { Button, Form, Row, Col } from "react-bootstrap";
import useCategorias from '../hooks/useCategorias'

const Formulario = () => {

    const { categorias } = useCategorias()



    return(
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>

                        <Form.Control
                            id="nombre"
                            name="nombre"
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc..."
                            className="border border-2"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                            <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>

                            <Form.Select
                                id="categoria"
                                name="categoria"
                            >
                                <option>- Selecciona Categoría -</option>
                                {categorias.map( categoria =>
                                    <option
                                        key={categoria.strCategory}
                                        value={categoria.strCategory}
                                    >{categoria.strCategory}</option>
                                )}
                            </Form.Select>
                        </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export { Formulario }