export default function getWindDirection(deg) {
  const direction =
    deg < 22.5
      ? "N"
      : deg >= 22.5 && deg < 45
      ? "NNE"
      : deg >= 45 && deg < 67.5
      ? "NE"
      : deg >= 67.5 && deg < 90
      ? "ENE"
      : deg >= 90 && deg < 112.5
      ? "E"
      : deg >= 112.5 && deg < 135
      ? "ESE"
      : deg >= 135 && deg < 157.5
      ? "SE"
      : deg >= 157.5 && deg < 180
      ? "SSE"
      : deg >= 180 && deg < 202.5
      ? "S"
      : deg >= 202.5 && deg < 225
      ? "SSW"
      : deg >= 225 && deg < 247.5
      ? "SW"
      : deg >= 247.5 && deg < 270
      ? "WSW"
      : deg >= 270 && deg < 292.5
      ? "W"
      : deg >= 292.5 && deg < 315
      ? "WNW"
      : deg >= 315 && deg < 337.5
      ? "NW"
      : deg > 337.5
      ? "NNW"
      : "";

  return direction;
}
