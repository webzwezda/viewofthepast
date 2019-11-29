class YouTube < Liquid::Tag
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @id = $1

      if $2.nil? then
          @width = 560
          @height = 315
      else
          @width = $2.to_i
          @height = $3.to_i
      end
    else
      raise "No YouTube ID provided in the \"youtube\" tag"
    end
  end

  def render(context)
    # "<div class=\"thumb-wrap\"><iframe width=\"#{@width}\" height=\"#{@height}\" src=\"https://youtube.com/embed/#{@id}\"  allowfullscreen></iframe></div>"
    "<div class=\"thumb-wrap\"><iframe width=\"#{@width}\" height=\"#{@height}\" src=\"https://youtube.com/embed/#{@id}\"  allowfullscreen></iframe></div>"
  end

  Liquid::Template.register_tag "youtube", self
end