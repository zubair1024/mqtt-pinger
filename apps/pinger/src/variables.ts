export const variables = {
  MQTT_URL: process.env.MQTT_URL,
  MQTT_PORT: Number(process.env.MQTT_PORT ?? 1883),
  MQTT_PING_TOPIC: process.env.MQTT_PING_TOPIC,
  MQTT_TLS: process.env.MQTT_PING_TOPIC === 'true' ? true : false,
};
