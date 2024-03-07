import { Markup,Telegraf,Context } from "telegraf";
import {config} from "../config/config"
 const bot = new Telegraf(config.BOT_TOKEN);


bot.start((ctx) => {
    ctx.reply(
      `Welcome to the ULTIMATE Trading Bot
      Please Select A Platform:`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "📊 BYBIT 📊", callback_data: "bybit" },
              { text: "📊 BINANCE 📊", callback_data: "binance" },
            ],
          ],
        },
      }
    );
  });

  export {bot};