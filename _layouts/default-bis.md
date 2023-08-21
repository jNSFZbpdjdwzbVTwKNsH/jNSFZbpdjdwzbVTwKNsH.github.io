<!DOCTYPE html>
<html lang="{{ page.lang | default: "it" }}">
  {%- include head.html -%}
  <body a="{{ site.theme_config.appearance | default: "auto" }}">
  <main class="page-content" aria-label="Content">

    {%-include top_bar.html-%}

      <div class="w">
        {{ content }}
      </div>
    </main>

    {%-if site.goat_counter and jekyll.environment == "production"-%}
      {%-include goat_counter.html-%}
    {%-endif-%}

    {% if page.custom_js %}
      {% for js_file in page.custom_js %}
        <script type="text/javascript" src="{{ site.baseurl }}/assets/js/{{ js_file }}.js"></script>
      {% endfor %}
    {% endif %}
  </body>
  <script async data-id="101414830" src="//static.getclicky.com/js"></script>
</html>
