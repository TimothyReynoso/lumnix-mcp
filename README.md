<div align="center">

# 🔍 Lumnix

**AI-powered e-commerce research tools via MCP**

Stop paying for three different SaaS dashboards. Ask your AI to find winning products, vet suppliers, and calculate margins — all in one conversation.

[![npm version](https://img.shields.io/npm/v/lumnix.svg)](https://www.npmjs.com/package/lumnix)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Protocol](https://img.shields.io/badge/MCP-2025--03--26-blue)](https://modelcontextprotocol.io)
[![Keepa Powered](https://img.shields.io/badge/Keepa-Powered-green)](https://keepa.com)

```bash
npm install lumnix
```

[Get API Key](https://lumnix.dev) · [Documentation](#-tools-reference) · [npm Package](https://www.npmjs.com/package/lumnix)

</div>

---

## Why Lumnix

**The old way:** Subscribe to Jungle Scout for product research ($49/mo), Keepa for price history ($50/mo), some Chrome extension for Alibaba vetting ($20/mo), and a spreadsheet for margin math. Switch between tabs all day. Miss opportunities.

**The Lumnix way:** One API key. 19 tools. In your AI assistant. No dashboards. No Chrome extensions. No tab-hopping.

> *"Find me wireless earbuds under $20 with high sales volume, low reviews, and a supplier on Alibaba with MOQ under 500"*

Your AI calls Lumnix. You get structured data with revenue estimates, competition analysis, and profit margins. You decide. Done.

### What makes it different

- **🚫 No dashboards** — Works inside Claude, Cursor, Windsurf, Cline, or any MCP client
- **📊 Keepa-powered** — Real price history and BSR tracking, not estimates
- **🎯 Opportunity Score** — 0-100 niche score based on demand, competition, and margin potential
- **🏭 Full sourcing pipeline** — Amazon → Alibaba → AliExpress, all connected
- **💰 Profit calculator** — Full P&L with FBA fees, shipping, PPC ads, refunds, and ROI
- **⚡ 30-second setup** — No install. No config file editing. Just an API key and one JSON block

---

## ⚡ Quick Start

### 1. Get an API key (free)

Sign up at [lumnix.dev](https://lumnix.dev) — no credit card required. Get your key in 30 seconds.

### 2. Add to your MCP client

**Claude Desktop** — edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "lumnix": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://lumnix.dev/api/mcp",
        "--header",
        "Authorization: Bearer YOUR_API_KEY"
      ]
    }
  }
}
```

> ⚠️ Claude Desktop doesn't support remote MCP URLs natively. The `mcp-remote` bridge (auto-installed by npx) makes it work. Requires Node.js installed.

**Cursor** — Settings → MCP → Add new global MCP server:

```json
{
  "mcpServers": {
    "lumnix": {
      "url": "https://lumnix.dev/api/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

**Windsurf / Cline / any MCP client** — same pattern as Cursor. URL + Bearer token header.

### 3. Start researching

Restart your AI client. Then just talk naturally:

> *"Search Amazon for portable blenders with high sales and low reviews"*

That's it. No Docker. No config files to debug.

---

## 🛠 Tools Reference

Lumnix gives your AI **19 specialized tools** across three platforms:

### Amazon — 11 tools

| Tool | What it does |
|------|-------------|
| `amazon_search_products` | Search by keyword with price, rating, and review filters |
| `amazon_get_product_details` | Full product page — features, specs, reviews, images, category |
| `amazon_estimate_sales` | Monthly sales volume with confidence range |
| `amazon_opportunity_score` | **⭐ 0-100 niche score** — demand, competition, margin potential |
| `amazon_analyze_competition` | Top players, review counts, price ranges for a keyword |
| `amazon_best_sellers` | Best-selling products by category with sales data |
| `amazon_keyword_suggestions` | Amazon autocomplete keywords with search frequency |
| `amazon_price_history` | **📊 Keepa-powered** — historical price chart |
| `amazon_bsr_history` | **📊 Keepa-powered** — Best Sellers Rank trend over time |
| `amazon_analyze_negative_reviews` | Complaint categories, sentiment breakdown, common issues |
| `amazon_analyze_listing_quality` | CTR + CVR scoring with specific improvement suggestions |

### Alibaba — 4 tools

| Tool | What it does |
|------|-------------|
| `alibaba_search_products` | Search suppliers and products with MOQ and price filters |
| `alibaba_get_product_details` | Pricing tiers, specs, variants, supplier credentials |
| `alibaba_vet_supplier` | **Trust score, risk flags, verification status** — avoid bad suppliers |
| `alibaba_match_to_amazon` | Match Alibaba products to Amazon listings for FBA arbitrage |

### AliExpress — 4 tools

| Tool | What it does |
|------|-------------|
| `aliexpress_search_products` | Search with price, rating, and store filters |
| `aliexpress_get_product_details` | Variants, specs, shipping options, store ratings |
| `aliexpress_analyze_supplier` | Store score, feedback rate, top-rated status |
| `aliexpress_profit_calculator` | **💰 Full P&L** — product cost, shipping, FBA fees, PPC, refunds, ROI |

---

## 💬 Example Prompts

**Product Research**
> "Search Amazon for stainless steel water bottles between $15-30 with at least 4 stars and under 1000 reviews"

**Opportunity Scoring**
> "Score the 'portable blender' niche on Amazon. Is it worth entering?"

**Competition Analysis**
> "Analyze the competition for 'organic dog treats'. How many sellers have less than 500 reviews?"

**Keepa Price History**
> "Show me the price history for ASIN B0FHWKYT89. Has it been trending down?"

**Supplier Vetting**
> "Find aluminum water bottle suppliers on Alibaba with trust score above 70 and MOQ under 500"

**Margin Calculation**
> "I want to sell this AliExpress product on Amazon for $29.99. Calculate my profit margin including FBA fees, PPC ads at 15%, and 5% refund rate"

**Full Workflow**
> "Find a product on Amazon with high sales volume and low reviews, find the matching supplier on Alibaba, vet them, and tell me if the margins work"

---

## 📊 Example Response

```json
{
  "asin": "B0FHWKYT89",
  "title": "Portable Blender for Shakes and Smoothies",
  "price": "$29.99",
  "rating": 4.5,
  "reviews": 2847,
  "sales_volume": "5K+ bought in past month",
  "monthly_revenue_est": "$149,950",
  "is_amazon_choice": true,
  "is_prime": true,
  "number_of_offers": 12
}
```

---

## 💰 Plans

| | Free | Pro | Business |
|---|---|---|---|
| **Price** | $0 | $29/mo | $99/mo |
| **API calls** | 10/month | 5,000/month | 25,000/month |
| **Platforms** | Amazon only | Amazon + Alibaba + AliExpress | Amazon + Alibaba + AliExpress |
| **Tools** | Search, details, keywords | **All 19** including Keepa | **All 19** including Keepa |
| **API keys** | 2 | 5 | 20 |
| **Keepa price history** | ❌ | ✅ | ✅ |
| **Opportunity score** | ❌ | ✅ | ✅ |
| **Supplier vetting** | ❌ | ✅ | ✅ |
| **Profit calculator** | ❌ | ✅ | ✅ |

The free tier gives you 3 Amazon search tools — enough to see the data quality. When you're ready for Keepa-powered insights, opportunity scoring, and full sourcing across all platforms, [upgrade here](https://lumnix.dev).

---

## 🔧 API Reference

Lumnix is a **remote MCP server**. No installation, no Docker, no local dependencies.

**Endpoint:** `https://lumnix.dev/api/mcp`
**Auth:** Bearer token in the Authorization header
**Protocol:** JSON-RPC 2.0 (MCP spec `2025-03-26`)

### Direct API call

```bash
curl -X POST https://lumnix.dev/api/mcp \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "amazon_search_products",
      "arguments": { "keyword": "wireless earbuds", "max_price": 50 }
    }
  }'
```

---

## 🌐 Find Us On

Lumnix is listed on all major MCP directories:

- [**Smithery.ai**](https://smithery.ai) — Search "lumnix"
- [**MCP Servers**](https://mcpservers.org) — Search "lumnix"
- [**Claude MCP Directory**](https://docs.anthropic.com/en/docs/agents-and-tools/mcp) — Coming soon
- [**npm**](https://www.npmjs.com/package/lumnix) — `npm install lumnix` · `npm info lumnix`

---

## ❓ FAQ

**What MCP clients work with Lumnix?**
Any client that supports remote MCP servers with HTTP transport: Claude Desktop, Cursor, Windsurf, Cline, VS Code (with MCP extension), and more.

**Is the free tier really free?**
Yes. 10 API calls/month, no credit card. Enough to search products and see the data quality before committing.

**Where does the data come from?**
Amazon data via web APIs + [Keepa](https://keepa.com) (for price/BSR history). Alibaba and AliExpress via their respective platforms. All structured, enriched, and ready to act on.

**How fast are the responses?**
Most tools respond in 1-5 seconds. Deep analysis tools (competition, reviews, opportunity score) can take up to 15 seconds.

**Can I use Lumnix in my own app?**
Yes. The REST API works with any HTTP client. Call the MCP endpoint directly with your API key — no AI assistant required.

**Do I need to install anything?**
No. Lumnix is a remote server. Just add the config to your MCP client and go.

---

## 🔒 Security

- API keys hashed with SHA-256 — never stored in plaintext
- Row-level security on all database tables
- Per-platform rate limiting
- Webhook signature verification for all payment events

---

## 📄 License

MIT

---

<div align="center">

**Built by [Molt Studios](https://moltstudios.com)**

[Website](https://lumnix.dev) · [Twitter](https://twitter.com/lumnix_dev)

</div>
