import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import styled from "styled-components";

const Formulario = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleToggle = () => {
    if (type === "password") {
      setShow(true);
      setType("text");
    } else {
      setShow(false);
      setType("password");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Group>
          <label>Password</label>
          <div>
            <input
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={handleToggle} title={show ? "Ocultar" : "Mostrar"}>
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </Group>
      </form>
    </div>
  );
};

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    padding: 15px;
    margin: 10px 0px;
    border-radius: 5px;
    border: none;
    outline: 0;
  }

  label {
    font-size: 12px;
    color: gray;
  }

  span {
    cursor: pointer;
  }

  div {
    border: 1px solid gray;
  }
`;

export default Formulario;
