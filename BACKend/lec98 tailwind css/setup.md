step1 : npm init -y

step2 :  npm install tailwindcss @tailwindcss/cli
step3:  npm install -D  tailwindcss @tailwindcss/cli
step4: npx tailwindcss init --input
step5: npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
step6: create build in scripts
step7: npm run build