# Инструкции по развертыванию SSR

## Автоматическое развертывание (1 команда)

### Способ 1: Прямая загрузка и запуск
```bash
ssh root@195.133.49.159
# Введите пароль: VsHJwxM9uc

# Затем выполните эту команду на VPS:
curl -sSL https://raw.githubusercontent.com/your-repo/complete-ssr-setup.sh | bash
```

### Способ 2: Загрузка через wget
```bash
ssh root@195.133.49.159
# Введите пароль: VsHJwxM9uc

# На VPS выполните:
wget -O setup.sh https://raw.githubusercontent.com/your-repo/complete-ssr-setup.sh
chmod +x setup.sh
./setup.sh
```

### Способ 3: Копирование скрипта вручную
1. Подключитесь к VPS:
```bash
ssh root@195.133.49.159
# Пароль: VsHJwxM9uc
```

2. Создайте файл скрипта:
```bash
nano complete-ssr-setup.sh
```

3. Скопируйте содержимое файла `complete-ssr-setup.sh` в редактор

4. Сохраните файл (Ctrl+X, Y, Enter)

5. Запустите скрипт:
```bash
chmod +x complete-ssr-setup.sh
./complete-ssr-setup.sh
```

## Что делает скрипт

✅ **Устанавливает Node.js 18** - современная версия для SSR
✅ **Настраивает Nginx** - веб-сервер с оптимизацией
✅ **Устанавливает PM2** - менеджер процессов
✅ **Создает Next.js приложение** - с поддержкой SSR
✅ **Настраивает SSL** - автоматический HTTPS
✅ **Включает безопасность** - fail2ban защита
✅ **Настраивает мониторинг** - автоматические проверки

## После развертывания

Ваш сайт будет доступен по адресу:
- https://programmirovanie-dlya-detej-online.ru
- https://www.programmirovanie-dlya-detej-online.ru

## Управление сайтом

```bash
# Проверить статус приложения
pm2 status

# Посмотреть логи
pm2 logs

# Перезапустить приложение
pm2 restart programmirovanie-dlya-detej

# Проверить статус Nginx
systemctl status nginx

# Проверить SSL сертификаты
certbot certificates
```

## Время выполнения

Полное развертывание займет примерно 10-15 минут и включает:
- Обновление системы
- Установку всех зависимостей
- Создание SSR приложения
- Настройку безопасности
- Получение SSL сертификата

После завершения у вас будет полностью рабочий SSR сайт с HTTPS!