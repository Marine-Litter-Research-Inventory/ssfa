import { Container } from '@material-ui/core';
import { ReactComponent as MapSVG } from 'svg/world.svg';
import { ReactComponent as ModifiedMapSVG } from 'svg/modified.svg';

export default function Map() {
  return (
    <>
      <MapSVG />
      {/* <ModifiedMapSVG width="100%" height="300px" /> */}
    </>
  )
}