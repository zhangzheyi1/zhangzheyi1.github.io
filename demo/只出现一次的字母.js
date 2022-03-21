var labels={
  cpu: "cpu-total",
  ident: "10-255-0-34",
  __name__: "cpu_usage_guest_nice"
}

for (const key in object) {
  console.log('key', key);
}

function a(value) {
  for (const key in value) {
    console.log('key', key);
  }
}
a(labels);