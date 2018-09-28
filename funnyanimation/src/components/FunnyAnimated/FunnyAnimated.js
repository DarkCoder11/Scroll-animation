import React from "react";
import Aux from "../hoc/Aux/Aux";
import classes from "./FunnyAnimated.css";
import { images } from "../../assets/";

const funnyAnimated = props => {
  return (
    <Aux>
      <img className={classes.Nutella } src={props.isNutella ? images.nuttela : images.minuteMade} alt="Nutella" />
      <img
        className={props.isNutella ? classes.ChocolatePieces:classes.fruitPieces}
        src={props.isNutella ? images.chocolatePieces : images.orangePieces }
        alt="ChocolatePieces"
      />
      <img
        className={props.isNutella ? classes.LooksFarChocolatePieces : classes.LooksFarFruitPieces}
        src={props.isNutella ? images.chocolatePieces : images.orangHalf}
        alt="ChocolatePieces"
      />
      <img className={props.isNutella ? classes.Nuts : classes.OrangePieces} src={props.isNutella ? images.nuts : images.orangePieces} alt="Nuts" />
      <img className={props.isNutella ? classes.LooksFarNuts:classes.LooksFarOrangePieces} src={props.isNutella ? images.nuts : images.shugarPieces} alt="Nuts" />
      <img className={props.isNutella ?classes.ShugarPieces:classes.ShugarPiecesForJuice} src={props.isNutella ? images.shugarPieces : images.orangHalf} alt="ShugarPieces" />
      <img
        className={props.isNutella ? classes.LooksFarShugarPieces : classes.LooksFarShugarPiecesForJuice}
        src={images.shugarPieces}
        alt="ShugarPieces"
      />
      <img
        className={props.isNutella ? classes.ChocolatePiecesSecond:classes.OrangePiecesSecond }
        src={props.isNutella ?images.chocolatePieces : images.orangePieces}
        alt="ChocolatePieces"
      />
      <img
        className={props.isNutella ? classes.ChocolatePiecesFirst : classes.OrangePiecesFirst }
        src={props.isNutella ? images.chocolatePieces : images.orangHalf}
        alt="ChocolatePieces"
      />
      <img className={props.isNutella ? classes.NutsFirst : classes.OrangHalf } src={props.isNutella ? images.nuts : images.orangHalf} alt="Nuts" />
    </Aux>
  );
};

export default funnyAnimated;
